# Survey Feedback Platform

A full-stack web application for creating and managing feedback/survey campaigns. The project is being built using the MERN stack and integrates Google OAuth authentication, MongoDB Atlas and modern deployment practices.

## Features Implemented

* Google OAuth Authentication using Passport.js
* User session management using cookies
* MongoDB Atlas integration
* User data storage using Mongoose
* Authentication routes for login, logout, and current user retrieval
* Development and Production environment configuration
* React frontend setup
* Frontend-Backend proxy configuration
* Render deployment configuration

## Features Planned

* Survey creation and management
* Email-based survey distribution
* Stripe payment integration
* Survey response collection
* Survey analytics dashboard
* User billing system

## Tech Stack

### Frontend

* React
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

## Project Structure

```text
server/
├── client/
├── config/
├── models/
├── routes/
├── services/
├── index.js
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

### Backend Only

```bash
node index.js
```

## Environment Variables

The project uses separate development and production configurations.

Required environment variables:

```env
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
MONGO_URI=
COOKIE_KEY=
```

## Current Progress

* Express backend setup completed
* MongoDB Atlas integration completed
* Passport.js authentication implemented
* Google OAuth login flow implemented
* Session and cookie management configured
* React frontend integrated
* Development/Production environment separation completed
* Render deployment configured
* Frontend-Backend proxy setup completed

## Deployment

The application is configured for deployment using Render and MongoDB Atlas.
