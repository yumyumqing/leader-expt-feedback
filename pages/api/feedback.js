import db from "../../lib/low";

export default async function handler(req, res) {
  // Get data submitted in request's body.
  const body = req.body;

  // Optional logging to see the responses
  // in the command line where next.js app is running.
  console.log("body: ", body);
  if (req.method === "POST") {
    // Process a POST request
    db.data.feedback.push({ ...body });
    await db.write();
  } else {
    // Handle any other HTTP method
    return res.status(404).json({ message: "Only supporting POST" });
  }
  // Guard clause checks for first and last name,
  // and returns early if they are not found
  if (
    !body.userID ||
    !body.yearOfBirth ||
    !body.employStatus ||
    !body.feedback
  ) {
    // Sends a HTTP bad request error code
    return res.status(400).json({
      message: "Harvard Skills Lab survey - One of the fields is not found",
    });
  }

  // Found the name.
  // Sends a HTTP success code
  res.status(200).json({ message: "Successfully Added" });
}
