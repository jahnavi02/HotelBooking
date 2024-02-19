Sure, let's create an API documentation section in the README.md file:

```markdown
# Hotel Booking Calendar Management Backend

This project is a backend service for hotel booking calendar management. It provides a RESTful API for managing hotel bookings, including functionalities such as creating, updating, and canceling bookings, as well as checking availability for specific dates and room types.

## API Documentation

### Authentication

#### Register a new user

- **URL:** `/api/register`
- **Method:** `POST`
- **Request Body:**
  ```json
  {
    "username": "example",
    "password": "password123"
    "email": "test@gmail.com"
    "phone": "1234567890"
    "country": "India"
    "city": "Hyderabad"
  }
  ```
- **Success Response:**
  - **Code:** `200`
    ```json
    {
      "message": "User registered successfully"
    }
    ```
- **Error Response:**
  - **Code:** `400`
    ```json
    {
      "error": "Username is already taken"
    }
    ```

#### Login

- **URL:** `/api/login`
- **Method:** `POST`
- **Request Body:**
  ```json
  {
    "username": "example",
    "password": "password123"
  }
  ```
- **Success Response:**
  - **Code:** `200`
    ```json
    {
      "token": "jwt-token"
    }
    ```
- **Error Response:**
  - **Code:** `401`
    ```json
    {
      "error": "Invalid credentials"
    }
    ```

### Hotel Management

#### Create a new hotel

- **URL:** `/api/hotels`
- **Method:** `POST`
- **Request Body:**
  ```json
  {
    "name": "Hotel ABC",
    "city": "New York",
    "address": "123 Main St",
    "cheapestPrice": 100
  }
  ```
- **Success Response:**
  - **Code:** `200`
    ```json
    {
      "_id": "hotel-id",
      "name": "Hotel ABC",
      "city": "New York",
      "address": "123 Main St",
      "cheapestPrice": 100,
      "createdAt": "timestamp",
      "updatedAt": "timestamp"
    }
    ```
- **Error Response:**
  ```json
    {
      "error": "Invalid hotel details"
    }
    ```

#### Update a hotel

- **URL:** `/api/hotels/:id`
- **Method:** `PUT`
- **Request Parameters:** `id` (Hotel ID)
- **Request Body:** (Fields to be updated)
- **Success Response:**
  ```json
    {
      "message": "Hotel updated successfully"
    }
    ```
- **Error Response:**
  ```json
    {
      "error": "Invalid hotel details"
    }
    ```

#### Delete a hotel

- **URL:** `/api/hotels/:id`
- **Method:** `DELETE`
- **Request Parameters:** `id` (Hotel ID)
- **Success Response:**
  ```json
    {
      "message": "Hotel deleted successfully"
    }
    ```
- **Error Response:**
  ```json
    {
      "error": "Invalid hotel details"
    }
    ```

### Room Management

#### Create a new room for a hotel

- **URL:** `/api/hotels/:hotelid/rooms`
- **Method:** `POST`
- **Request Parameters:** `hotelid` (Hotel ID)
- **Request Body:**
  ```json
  {
    "roomNumber": "101",
    "type": "single",
    "price": 100
  }
  ```
- **Success Response:**
  ```json
    {
      "message": "Room created successfully"
    }
    ```
- **Error Response:** 
```json
  {
    "error": "Invalid room details"
  }
```

#### Update a room

- **URL:** `/api/rooms/:id`
- **Method:** `PUT`
- **Request Parameters:** `id` (Room ID)
- **Request Body:** (Fields to be updated)
- **Success Response:**
  ```json
    {
      "message": "Room updated successfully"
    }
    ```
- **Error Response:**
  ```json
    {
      "error": "Invalid room details"
    }
    ```

#### Delete a room

- **URL:** `/api/rooms/:id`
- **Method:** `DELETE`
- **Request Parameters:** `id` (Room ID)
- **Success Response:**
  ```json
    {
      "message": "Room deleted successfully"
    }
    ```
- **Error Response:**
  ```json
    {
      "error": "Invalid room details"
    }
    ```
```

This API documentation provides clear instructions on how to interact with each endpoint of the backend service, including the URL, HTTP method, request body (if applicable), success response format, and error response format. Adjustments can be made based on the actual endpoint implementations and any additional details you want to include.
