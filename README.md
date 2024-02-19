# Hotel Booking Calendar Management Backend

This project is a backend service for hotel booking calendar management. It provides a RESTful API for managing hotel bookings, including functionalities such as creating, updating, and canceling bookings, as well as checking availability for specific dates and room types.

## Technologies Used

- Node.js
- Express.js
- MongoDB (with Mongoose)
- JSON Web Tokens (JWT) for authentication

## Setup Instructions

1. **Clone the Repository:**
```shell
git clone https://github.com/jahnavi02/HotelBooking
```


2. **Install Dependencies:**
```shell
cd HotelBooking
npm install
```


3. **Set Up Environment Variables:**
- Create a `.env` file in the root directory.
- Add the following environment variables:
  ```
  PORT=3000
  MONGODB_URI=<mongodb-uri>
  JWT_SECRET=<jwt-secret>
  ```

4. **Run the Application:**
```shell
npm start
```
Done! Now you can access localhost:5001 APIs in your POSTMAN.

5. **Running Tests:**
```shell
npm test
```


<!-- 6. **Accessing the API:**
- The API documentation can be found in the code comments and/or separate API documentation file.
- The API will be available at `http://localhost:5001`. -->



