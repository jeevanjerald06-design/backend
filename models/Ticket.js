const mongoose = require("mongoose");

const TicketSchema = new mongoose.Schema({
  eventId: { type: mongoose.Schema.Types.ObjectId, ref: "Event" },
  buyerName: String,
  buyerEmail: String,
  quantity: Number,
  totalPrice: Number,
  status: { type: String, enum: ['RESERVED','CONFIRMED','CANCELLED'], default: 'CONFIRMED' },
  bookingAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Ticket", TicketSchema);
