import mongoose from "mongoose";
import dotenv from "dotenv";
import Event from "./models/Event.js";

dotenv.config();

const events = [
  {
    title: "Tech Conference",
    description: "Explore the future of AI and technology",
    date: "2025-11-15",
    location: "Bangalore",
    price: 499
  },
  {
    title: "Music Festival",
    description: "A night of music and fun!",
    date: "2025-12-10",
    location: "Mumbai",
    price: 299
  },
  {
    title: "Startup Meetup",
    description: "Meet successful founders and investors",
    date: "2025-11-20",
    location: "Delhi",
    price: 199
  }
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    await Event.deleteMany();
    await Event.insertMany(events);
    console.log("✅ Events added successfully!");
    process.exit();
  } catch (err) {
    console.error("❌ Error seeding events:", err);
    process.exit(1);
  }
};

seedDB();
