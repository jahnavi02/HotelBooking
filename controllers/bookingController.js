const Room = require("../models/roomModel.js");
const Hotel = require("../models/hotelModel.js");
const Booking = require("../models/bookingModel.js");

const createRoom = async (req, res, next) => {
  const hotelId = req.params.hotelid;
  const newRoom = new Room(req.body);

  try {
    const savedRoom = await newRoom.save();
    await Hotel.findByIdAndUpdate(hotelId, {
      $push: { rooms: savedRoom._id },
    });
    res.status(200).json(savedRoom);
  } catch (err) {
    next(err);
  }
};

const updateRoom = async (req, res, next) => {
  try {
    const updatedRoom = await Room.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedRoom);
  } catch (err) {
    next(err);
  }
};

const updateRoomAvailability = async (req, res, next) => {
  try {
    const roomId = req.params.id;
    const { dates } = req.body;
    const room = await Room.findByIdAndUpdate(roomId, {
      $push: { unavailableDates: dates }
    });
    res.status(200).json("Room availability has been updated.");
  } catch (err) {
    next(err);
  }
};

const deleteRoom = async (req, res, next) => {
  const hotelId = req.params.hotelid;
  try {
    await Room.findByIdAndDelete(req.params.id);
    await Hotel.findByIdAndUpdate(hotelId, {
      $pull: { rooms: req.params.id },
    });
    res.status(200).json("Room has been deleted.");
  } catch (err) {
    next(err);
  }
};

const getRoom = async (req, res, next) => {
  try {
    const room = await Room.findById(req.params.id);
    res.status(200).json(room);
  } catch (err) {
    next(err);
  }
};

const getRooms = async (req, res, next) => {
  try {
    const rooms = await Room.find();
    res.status(200).json(rooms);
  } catch (err) {
    next(err);
  }
};

const createBooking = async (req, res, next) => {
  const roomId = req.params.roomid;
  const newBooking = new Booking(req.body);

  try {
    const savedBooking = await newBooking.save();
    await Room.findByIdAndUpdate(roomId, {
      $push: { bookings: savedBooking._id },
    });
    res.status(200).json(savedBooking);
  } catch (err) {
    next(err);
  }
};

const updateBooking = async (req, res, next) => {
  try {
    const updatedBooking = await Booking.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedBooking);
  } catch (err) {
    next(err);
  }
};

const cancelBooking = async (req, res, next) => {
  const roomId = req.params.roomid;
  try {
    await Booking.findByIdAndDelete(req.params.id);
    await Room.findByIdAndUpdate(roomId, {
      $pull: { bookings: req.params.id },
    });
    res.status(200).json("Booking has been canceled.");
  } catch (err) {
    next(err);
  }
};

const calculateAvailability = (room) => {
  const bookingsCount = room.bookings.length;
  const unavailableDatesCount = room.unavailableDates.length;
  const totalDatesCount = 365; // Assuming availability is checked for one year
  const availableDatesCount = totalDatesCount - unavailableDatesCount;
  const availabilityPercentage = (availableDatesCount / totalDatesCount) * 100;
  return {
    bookingsCount,
    unavailableDatesCount,
    availableDatesCount,
    availabilityPercentage
  };
};

const getAvailability = async (req, res, next) => {
  try {
    const roomId = req.params.id;
    const room = await Room.findById(roomId).populate('bookings');
    const availability = calculateAvailability(room);
    res.status(200).json(availability);
  } catch (err) {
    next(err);
  }
};


module.exports = {
  createRoom,
  updateRoom,
  updateRoomAvailability,
  deleteRoom,
  getRoom,
  getRooms,
  createBooking,
  updateBooking,
  cancelBooking,
  getAvailability,
  calculateAvailability
};
