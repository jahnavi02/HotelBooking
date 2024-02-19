const request = require('supertest');
const app = require('../server'); 
const Room = require('../models/roomModel');

describe('RoomController', () => {
  describe('POST /api/hotels/:hotelid/rooms', () => {
    it('should create a new room for a hotel', async () => {
      const roomId = '123'; // Replace '123' with a valid hotel ID
      const roomData = {
        title: "xys",
        price: "$123",
        maxPeople: 3,
        desc: "capacity 3 people name xys"        
      };

      const response = await request(app)
        .post(`/api/hotels/${roomId}/rooms`)
        .send(roomData)
        .expect(200);

      expect(response.body).toHaveProperty('roomNumber', roomData.roomNumber);
      // Add more assertions as needed
    });
  });

  describe('PUT /api/rooms/:id', () => {
    it('should update an existing room', async () => {
      const roomData = {
        title: "xys",
        price: "$123",
        maxPeople: 4
      };

      const response = await request(app)
        .put('/api/rooms/123') // Replace '123' with a valid room ID
        .send(roomData)
        .expect(200);

      expect(response.body).toHaveProperty('roomNumber', roomData.roomNumber);
      // Add more assertions as needed
    });
  });

  describe('DELETE /api/rooms/:id', () => {
    it('should delete an existing room', async () => {
      const roomId = '123'; // Replace '123' with a valid room ID

      await request(app)
        .delete(`/api/rooms/${roomId}`)
        .expect(200);

      // Verify that the room is deleted from the database
      const deletedRoom = await Room.findById(roomId);
      expect(deletedRoom).toBeNull();
    });
  });

  // Add more test cases as needed for other roomController functionalities
});
