// hotelController.test.js

const request = require('supertest');
const app = require('../server'); // Assuming your Express app is exported from server.js
const Hotel = require('../models/hotelModel');

describe('HotelController', () => {
  describe('POST /api/hotels', () => {
    it('should create a new hotel', async () => {
      const hotelData = {
        // Provide hotel data for testing, all the details that are set to require true
      };

      const response = await request(app)
        .post('/api/hotels')
        .send(hotelData)
        .expect(200);

      expect(response.body).toHaveProperty('name', hotelData.name);
      // Add more assertions as needed
    });
  });

  describe('PUT /api/hotels/:id', () => {
    it('should update an existing hotel', async () => {
      const hotelData = {
        // Provide updated hotel data for testing
      };

      const response = await request(app)
        .put('/api/hotels/123') // Replace '123' with a valid hotel ID
        .send(hotelData)
        .expect(200);

      expect(response.body).toHaveProperty('name', hotelData.name);
      // Add more assertions as needed
    });
  });

  describe('DELETE /api/hotels/:id', () => {
    it('should delete an existing hotel', async () => {
      const hotelId = '123'; // Replace '123' with a valid hotel ID

      await request(app)
        .delete(`/api/hotels/${hotelId}`)
        .expect(200);

      // Verify that the hotel is deleted from the database
      const deletedHotel = await Hotel.findById(hotelId);
      expect(deletedHotel).toBeNull();
    });
  });

  // Add more test cases as needed for other hotelController functionalities
});
