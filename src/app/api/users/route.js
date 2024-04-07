import { db } from "@/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import {NextResponse } from "next/server";
export const dynamic = "force-dynamic"; // defaults to auto

export async function POST(req, res) {
  try {
    const { firstName, lastName, address, city, email } = await req.json();
    const newUser = await db.userProfile.create({
      data: {
        firstName,
        lastName,
        email,
        address,
        city,
        userId: "ubib",
      },
    });

    console.log(newUser);
    return NextResponse.json({ user: newUser });
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json({ error: "Failed to create user" });
  }
}

async function getUsers(req, res) {
  try {
    const users = await prisma.userProfile.findMany();
    Response.status(200).json({ users });
  } catch (error) {
    console.error("Error fetching users:", error);
    Response.status(500).json({ error: "Failed to fetch users" });
  }
}

// function to get the logged in user from Kinde
async function getLoggedInUser(req, res) {
  try {
    const { getUser } = getKindeServerSession();
    const user = getUser();
    const id = user.length == 0 ? user.id : "1";
    return id
  } catch (error) {
    console.error("Error fetching logged in user:", error);
  }
}

async function createUser(req, res) {
  try {
    const { firstName, lastName, address, city, email } = req.body;
    console.log(firstName, lastName, address, city, email, "csdcs");
    // const newUser = await db.userProfile.create({
    //   data: {
    //     firstName,
    //     lastName,
    //     email,
    //     address,
    //     city,
    //   },
    // });

    // console.log(newUser);
    Response.status(201).json({ user: newUser });
  } catch (error) {
    console.error("Error creating user:", error);
    Response.status(500).json({ error: "Failed to create user" });
  }
}
