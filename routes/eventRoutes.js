import express from "express";
import Event from "../models/Event.js";

const router = express.Router();

// ✅ GET all events
router.get("/", async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).json(events);
  } catch (err) {
    console.error("❌ Error fetching events:", err);
    res.status(500).json({ message: "Server Error" });
  }
});

// ✅ POST (Add new event) — optional
router.post("/", async (req, res) => {
  try {
    const newEvent = new Event(req.body);
    const savedEvent = await newEvent.save();
    res.status(201).json(savedEvent);
  } catch (err) {
    console.error("❌ Error adding event:", err);
    res.status(500).json({ message: "Failed to add event" });
  }
});

export default router;
