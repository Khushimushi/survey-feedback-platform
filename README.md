# Survey Feedback Platform

A full-stack web application for creating and managing feedback and survey campaigns. The project is being developed using the MERN stack and integrates Google OAuth authentication, MongoDB Atlas, Redux state management and modern deployment practices.

## Features Implemented

* Google OAuth Authentication using Passport.js
* User session management using cookies
* MongoDB Atlas integration
* User data storage using Mongoose
* Authentication routes for login, logout, and current user retrieval
* Development and Production environment configuration
* React frontend setup
* Redux state management
* Redux Thunk middleware integration
* React Router navigation
* Current user authentication state management
* Materialize CSS integration
* Frontend-Backend proxy configuration
* Render deployment configuration

## Features Planned

* Survey creation and management
* Email-based survey distribution
* Stripe payment integration
* Survey response collection
* Survey analytics dashboard
* User billing and credit system
* Campaign performance tracking

## Tech Stack

### Frontend

* React
* React Router
* Redux
* Redux Thunk
* Materialize CSS
* JavaScript
* Create React App

### Backend

* Node.js
* Express.js
* Passport.js
* Google OAuth 2.0
* Cookie Session

### Database

* MongoDB Atlas
* Mongoose

### Deployment & Tools

* Render
* GitHub
* Git
* VS Code

## Project Structure

```text
server/
├── client/
│   └── src/
│       ├── actions/
│       ├── components/
│       ├── reducers/
│       └── index.js
├── config/
├── models/
├── routes/
├── services/
└── index.js
```

## Authentication Routes

```text
/auth/google
/auth/google/callback
/api/current_user
/api/logout
```

## Installation

### Clone Repository

```bash
git clone <repository-url>
cd survey-feedback-platform/server
```

### Install Backend Dependencies

```bash
npm install
```

### Install Frontend Dependencies

```bash
cd client
npm install
```

## Running the Application

### Development Mode

```bash
npm run dev
```

This command starts both the Express backend server and React frontend development server concurrently.

## Environment Variables

Create a `dev.js` file inside the `config` folder for local development and configure the following variables:

```env
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
MONGO_URI=
COOKIE_KEY=
```

For production deployment, these values should be stored as environment variables in the hosting platform.

## Current Progress

* Express backend architecture completed
* MongoDB Atlas integration completed
* Passport.js authentication implemented
* Google OAuth login flow implemented
* Session and cookie management configured
* React frontend architecture implemented
* Redux store and reducers configured
* Redux Thunk middleware integrated
* React Router navigation configured
* Header component and authentication UI implemented
* Current user fetching and state management implemented
* Development and Production environment separation completed
* Render deployment configured
* Frontend-Backend proxy setup completed

## Deployment

The application is configured for deployment using Render and MongoDB Atlas.

## Future Enhancements

* Survey creation workflow
* Email campaign management
* Stripe billing integration
* User credits system
* Survey analytics and reporting
* Responsive dashboard and user interface

## License

This project is being developed for learning full-stack web development and modern MERN application architecture.
