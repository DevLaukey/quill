import { db } from "@/db";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      // Extract user details from request body
      const { firstName, lastName, address, city, email } = req.body;

      // Create user in the database using db
      const user = await db.user.create({
        data: {
          firstName,
          lastName,
          email,
          address,
          city,
        },
      });

      // Respond with status code 201 and the created user object
      res.status(201).json({ user });
    } catch (error) {
      console.error("Error creating user:", error);
      // Respond with status code 500 and an error message
      res.status(500).json({ error: "Failed to create user" });
    }
  } else {
    // Respond with status code 405 if the request method is not allowed
    res.status(405).json({ error: "Method not allowed" });
  }
}
