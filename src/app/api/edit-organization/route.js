import { NextResponse } from "next/server";
import { db } from "@/db";

export const dynamic = "force-dynamic"; // defaults to auto

export async function PATCH(req, res) {
  if (req.method !== "PATCH") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { action, organization, userIds } = await req.json();
  console.log("PATCH", action, organization, userIds);

  try {
    // Check the action type
    if (action === "removeUsers") {
      // Remove users from the organization
      const updatedUserProfiles = await Promise.all(
        userIds.map(async (userId) => {
          return await db.userProfile.update({
            where: { id: String(userId) },
            data: { organization: null }, // Remove organization association
          });
        })
      );

      return NextResponse.json({ userProfiles: updatedUserProfiles });
    } else if (action === "updateOrganizationName") {
      // Update organization name
      const updatedUserProfiles = await db.userProfile.updateMany({
        where: { id: { in: userIds } },
        data: { organization },
      });

      return NextResponse.json({ userProfiles: updatedUserProfiles });
    } else {
      return res.status(400).json({ error: "Invalid action" });
    }
  } catch (error) {
    console.error("Error updating user profiles:", error);
    return NextResponse.json({ error: "Failed to update user profiles" });
  }
}
