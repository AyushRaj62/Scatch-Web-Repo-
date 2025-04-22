# LeatherCraft E-commerce Website

A modern e-commerce website for premium leather bags built with Node.js, Express, and MongoDB.

## Features

- User Authentication (Login/Register)
- Product Catalog
- Shopping Cart Functionality
- Responsive Design
- Contact Form
- About Page
- Secure Session Management
- Flash Messages for User Feedback

## Tech Stack

- Node.js
- Express.js
- MongoDB
- EJS Templates
- Bootstrap
- JWT Authentication

## Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm

## Installation

1. Clone the repository:
   ```bash
   git clone [your-repo-url]
   cd [your-repo-name]
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a .env file in the root directory with the following variables:
   ```
   MONGODB_URI=mongodb://localhost:27017/scatch
   SESSION_SECRET=your-secret-key
   PORT=3000
   ```

4. Start the server:
   ```bash
   npm start
   ```

   For development with auto-reload:
   ```bash
   npm run dev
   ```

5. Visit `http://localhost:3000` in your browser

## Project Structure

- `/controllers` - Request handlers
- `/middlewares` - Custom middleware functions
- `/models` - Database models
- `/public` - Static files (CSS, images)
- `/routes` - Application routes
- `/views` - EJS templates
- `/config` - Configuration files

## Security Features

- CORS enabled
- Helmet.js for security headers
- Rate limiting
- Session management
- Password hashing
- JWT authentication

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

This project is licensed under the ISC License. 