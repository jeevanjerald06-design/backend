 import mongoose from "mongoose";
import dotenv from "dotenv";
import Event from "./models/Event.js";

dotenv.config();

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("🌱 Seeding events...");

    await Event.deleteMany();

    await Event.insertMany([
      {
        title: "Tech Conference 2025",
        date: "2025-12-10",
        location: "Chennai Trade Center",
        description: "A full-day conference about the latest in tech innovation.",
      },
      {
        title: "Music Fest 2025",
        date: "2025-11-25",
        location: "Marina Beach Arena",
        description: "A fun music festival with artists from around the world.",
      },
      {
        title: "Startup Meetup 2025",
        date: "2025-11-20",
        location: "TIDEL Park Auditorium",
        description: "Networking and insights for startup enthusiasts.",
      },
    ]);

    console.log("✅ Events added successfully!");
    process.exit();
  })
  .catch((err) => console.error("❌ Error:", err));
