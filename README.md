# Verdant Elegance

## Project Overview

**Verdant Elegance** is a modern e-commerce application designed to provide users with a seamless online shopping experience for plants and plant-related products. The application allows users to browse a diverse selection of plants, manage their shopping cart, and securely process payments. With a focus on user-friendly design and responsiveness, Verdant Elegance aims to connect nature enthusiasts with the beauty of indoor greenery.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Folder Structure](#folder-structure)
- [Getting Started](#getting-started)
- [Contributing](#contributing)
- [License](#license)

## Features

- User authentication and registration with encrypted password storage.
- Dynamic plant catalog that allows users to search and filter by plant names.
- Shopping cart functionality with the ability to add, remove, and update quantities.
- Secure payment processing using Stripe for a seamless checkout experience.
- Responsive design for optimal usability across devices.

## Technologies Used

- **React**: A JavaScript library for building user interfaces using a component-based architecture.
- **Tailwind CSS**: A utility-first CSS framework for rapid and responsive UI design.
- **React Router**: A library for managing navigation and routing in a React application.
- **Context API**: For global state management across components, facilitating easy data sharing.
- **Stripe**: A payment processing platform for securely handling transactions.
- **Fetch API**: For making asynchronous HTTP requests to the back-end API.

-React: A JavaScript library for building user interfaces, enabling a component-based architecture for better maintainability and scalability.
-React Router: For client-side routing, allowing users to navigate between different pages without reloading the entire application.
-Context API: For global state management, simplifying the sharing of state across components without the need for prop drilling.
-Stripe: For secure payment processing, allowing users to complete transactions safely.
-Tailwind CSS: A utility-first CSS framework for styling the application, enabling rapid UI development with a responsive design.
-JavaScript ES6: Utilizing modern JavaScript features for improved code quality and functionality.
-Fetch API: For making HTTP requests to retrieve plant data and interact with the backend server.

##FEATURES

-User Authentication: Users can log in to their accounts to access personalized shopping experiences.
-Plant Listings: A dynamic home page displaying various plants with detailed information, including images, names, descriptions, and prices.
-Search Functionality: Users can easily search for specific plants using a search bar, enhancing their shopping experience.
-Shopping Cart: A dedicated cart page allowing users to view selected items, adjust quantities, and remove items as needed.
-Secure Checkout: Integration with Stripe for handling payments securely, including creating payment intents and processing payment forms.
-Responsive Design: The application is fully responsive, providing an optimal experience across different devices (desktops, tablets, and mobile).
-Featured Plants Carousel: A visually appealing carousel showcasing featured plants, promoting seasonal offers or new arrivals.
-Global State Management: Efficient state management using the Context API, allowing for seamless updates to the shopping cart and user session     information.
-Error Handling: User-friendly error messages for failed API calls and login attempts, enhancing user experience.
-Dynamic Pagination: Pagination on the cart page allows users to navigate through their cart items easily.

## Folder Structure

The project follows a well-organized folder structure to maintain clarity and ease of navigation. Below is an overview of the main directories and their purposes:

verdant-elegance/ ── public/                  # Main directory for public assets
                  ├── index.html              # Main HTML file for the React app
                  └── ...                     # Other static assets
                  
                  ├── src/                     # Main source directory for the React application
                  ├── components/              # Reusable components (e.g., PlantCard, Carousel, PaymentForm)
                  │   ├── Carousel.js          # Component for displaying a carousel of featured plants
                  │   ├── PlantCard.js         # Individual plant card component displaying plant info
                  │   └── PaymentForm.js       # Form component for handling payment details
                  │
                  ├── pages/                   # Main pages of the application
                  │   ├── Home.js              # Home page with plant listings and descriptions
                  │   ├── Cart.js              # Shopping cart page displaying selected items
                  │   ├── Checkout.js          # Checkout page for processing payments
                  │   └── Login.js             # User login page
                  │
                  ├── store/                   # Global state management using Context API
                  │   └── ContextProvider.js   # Provider component for managing global state
                  │
                  ├── App.js                   # Main application component
                  ├── index.js                 # Entry point for the React application
                  └── ...                      # Additional files as needed
                  
                  └── ...                      # Other project files (e.g., package.json, README.md)





                  Contributing
Contributions are welcome! Please follow these steps:

1.Fork the repository.
2.Create a feature branch.
3.Make your changes.
4.Commit your changes.
5.Push to the branch.
6.Open a pull request.


##License
This project is licensed under the MIT License. See the LICENSE file for details.

##Verdant Elegance - Backend

Verdant Elegance backend serves as the foundation for the e-commerce platform, providing APIs for plant data management, user authentication, and payment processing. Built with Node.js and Express, this backend ensures secure and efficient communication between the client-side application and the database.

Features
-RESTful API: Provides endpoints for managing plants, users, and orders, allowing the frontend to perform CRUD operations efficiently.
-User Authentication: Implements JWT (JSON Web Token) for secure user authentication and session management.
-Plant Management: Admin capabilities for adding, updating, and deleting plant entries in the database.
-Cart Management: API endpoints for managing the user's shopping cart, including adding items, updating quantities, and removing items.
-Payment Processing: Integrates with Stripe for handling payment intents and processing transactions securely.
-Error Handling: Centralized error handling middleware to manage and respond to errors gracefully.
-Data Validation: Uses middleware to validate incoming data and ensure the integrity of requests.
-CORS Support: Configured Cross-Origin Resource Sharing (CORS) to allow requests from the frontend application.

Technologies Used

-Node.js: A JavaScript runtime built on Chrome's V8 JavaScript engine, enabling server-side development.
-Express: A minimal and flexible Node.js web application framework for building RESTful APIs.
-MongoDB: A NoSQL database used for storing user data, plant information, and orders.
-Mongoose: An ODM (Object Data Modeling) library for MongoDB and Node.js, providing a schema-based solution to model application data.
-JSON Web Tokens (JWT): For secure user authentication and maintaining user sessions.
-Stripe: A payment processing platform that enables secure online transactions.
-dotenv: A zero-dependency module that loads environment variables from a .env file into process.env.
-Body-parser: Middleware for parsing incoming request bodies in a middleware before handlers, available under the req.body property.
-Nodemon: A utility that monitors changes in your source files and automatically restarts your server, making development more efficient.

Project Structure
verdant-elegance-backend/ ── config/                # Configuration files
                         ├── db.js                 # Database connection configuration
                         ├── stripe.js             # Stripe configuration
                         
                         ├── controllers/           # Controllers handling business logic
                         │   ├── authController.js  # Authentication-related logic
                         │   ├── plantController.js # Plant management logic
                         │   └── cartController.js  # Cart management logic
                         
                         ├── models/                # Mongoose models representing data structures
                         │   ├── User.js            # User schema and model
                         │   ├── Plant.js           # Plant schema and model
                         │   └── Order.js           # Order schema and model
                         
                         ├── routes/                # API route definitions
                         │   ├── auth.js            # Authentication routes
                         │   ├── plants.js          # Plant management routes
                         │   └── cart.js            # Cart management routes
                         
                         ├── middleware/            # Custom middleware for handling requests
                         │   ├── auth.js            # Authentication middleware
                         │   └── errorHandler.js     # Error handling middleware
                         
                         ├── server.js              # Entry point for the Node.js application
                         ├── .env                   # Environment variables
                         ├── package.json            # Project metadata and dependencies
                         └── README.md              # Project documentation

                         Getting Started
To get a local copy of the backend up and running, follow these steps:

Clone the repository:

bash
Copy code
git clone https://github.com/your-username/verdant-elegance-backend.git
Navigate to the project directory:

bash
Copy code
cd verdant-elegance-backend
Install dependencies:

bash
Copy code
npm install
Set up environment variables: Create a .env file in the root directory and add the following variables:

plaintext
Copy code
PORT=5000
MONGO_URI=your_mongo_database_uri
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
Start the server:

bash
Copy code
npm start
Open your API client (e.g., Postman) and test the endpoints:

Base URL: http://localhost:5000/api
Example endpoints:
POST /api/auth/login
GET /api/plants
POST /api/cart

API Documentation
For detailed information on the available API endpoints, request and response formats, and authentication, please refer to the API documentation.

Contributing
Contributions are welcome! Please follow these steps:

-Fork the repository.
-Create a feature branch.
-Make your changes.
-Commit your changes.
-Push to the branch.
-Open a pull request.

License
This project is licensed under the MIT License. See the LICENSE file for details.

