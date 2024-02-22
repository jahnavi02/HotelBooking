const {
  createRoom,
  deleteRoom,
  getRoom,
  getRooms,
  updateRoom,
  updateRoomAvailability,
  createBooking,
  updateBooking,
  cancelBooking,
  getAvailability
} = require( "../controllers/bookingController");
const { verifyAdmin } = require( "../utils/verifyToken.js");

const router = require("express").Router();

// CREATE
router.post("/:hotelid/room", verifyAdmin, createRoom);

// UPDATE
router.put("/room/availability/:id", verifyAdmin, updateRoomAvailability);
router.put("/room/:id", verifyAdmin, updateRoom);

// DELETE
router.delete("/room/:id/:hotelid", verifyAdmin, deleteRoom);

// GET
router.get("/room/:id", getRoom);

// GET ALL
router.get("/room", getRooms);

// BOOKINGS
router.post("/bookingroom", createBooking);
router.put("/bookingroom/:id", updateBooking);
router.delete("/bookingroom/:id", cancelBooking);
router.get("/bookingroom/:id", getAvailability);

module.exports = router;
