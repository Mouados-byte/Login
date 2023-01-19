# Login and Registration App

This is a simple login and registration application built with Node.js, Express, and MongoDB. The application allows users to register an account and login using their credentials. The user's information is stored in a MongoDB database, and the passwords are hashed using the crypto library.

## Features
- User registration
- User login
- Password hashing
- User sessions
- MongoDB integration

## Getting Started

To get started, you need to have Node.js and MongoDB installed on your machine.

1. Clone the repository to your local machine.
git clone https://github.com/Mouados-byte/Login.git

Copy code

2. Install the dependencies by running the following command in the project's root directory.
npm install

Copy code

3. Create a `.env` file in the root directory of your project and add the following environment variables
    ```
    MONGOOSE_NAME=YOUR_MONGO_DB_USERNAME
    MONGOOSE_PASSWORD=YOUR_MONGO_DB_PASSWORD
    ```

4. Start the application by running the following command.
npm start

Copy code

5. Open your browser and navigate to `http://localhost:3000/`. You should see the login page.

## Built with
- Node.js
- Express
- MongoDB
- crypto
- express-session
- dotenv

## Authors

* **Imam Mouad** - *Initial work* - [Mouados-byte](https://github.com/Mouados-byte)
