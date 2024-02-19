const request = require('supertest');
const app = require('../server'); 
const User = require('../models/user'); 

describe('AuthController', () => {
  describe('POST /api/register', () => {
    it('should register a new user', async () => {
      const userData = {
        username: 'testuser',
        password: 'testpassword',
        phone: '1234567890',
        email: "test@gmail.com",
        city: "test",
        country: "test"
      };

      const response = await request(app)
        .post('/api/register')
        .send(userData)
        .expect(200);

      expect(response.body).toHaveProperty('username', 'testuser');
      // Add more assertions as needed
    });
  });

  describe('POST /api/login', () => {
    it('should log in an existing user', async () => {
      const userData = {
        username: 'existinguser',
        password: 'existingpassword',
      };

      const response = await request(app)
        .post('/api/login')
        .send(userData)
        .expect(200);

      expect(response.body).toHaveProperty('token');
      // Add more assertions as needed
    });

    it('should return 401 for invalid credentials', async () => {
      const userData = {
        username: 'invaliduser',
        password: 'invalidpassword',
      };

      await request(app)
        .post('/api/login')
        .send(userData)
        .expect(401);
    });
  });

  // Add more test cases as needed for other AuthController functionalities
});
