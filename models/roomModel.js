const mongoose = require("mongoose");
const RoomSchema = new mongoose.Schema(
  {
    hotel: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Hotel',
      required: true
    },
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    maxPeople: {
      type: Number,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    roomNumbers: [{ number: Number, unavailableDates: {type: [Date]}}],
    bookings: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Booking'
    }],
  },
  { timestamps: true }
);

const RoomSch = mongoose.model("Room", RoomSchema);

module.exports = RoomSch;