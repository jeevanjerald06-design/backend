 import express from "express";
import Booking from "../models/Booking.js";

const router = express.Router();

// Book an event
router.post("/", async (req, res) => {
  const { userId, eventId } = req.body;
  const booking = await Booking.create({ userId, eventId });
  res.json(booking);
});

// Get bookings by user ID
router.get("/:userId", async (req, res) => {
  const bookings = await Booking.find({ userId: req.params.userId }).populate("eventId");
  res.json(bookings);
});

export default router;
