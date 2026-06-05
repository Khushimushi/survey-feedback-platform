# Survey Feedback Platform

A full-stack survey and feedback collection platform built using the MERN stack. The application allows authenticated users to create email-based surveys, manage credits, distribute surveys through SendGrid and collect responses.

## Features Implemented

### Authentication & User Management

- Google OAuth authentication using Passport.js
- Session management with Cookie Session
- Persistent user login state
- Current user retrieval API
- Logout functionality

### Billing System

- Stripe billing integration setup
- Credit-based survey creation system
- User credit tracking
- Protected routes requiring available credits

### Survey Management

- Survey creation workflow
- Multi-step survey form with review screen
- Form validation using Redux Form
- Email recipient validation
- Survey data storage using MongoDB
- Survey ownership tracking
- Credit verification before survey creation

### Email Infrastructure

- SendGrid integration
- Custom Mailer service
- Survey email template generation
- Recipient management using subdocuments
- Verified sender configuration

### Deployment

- Render deployment configuration
- Production Express + React integration
- Production routing support
- Environment-based configuration
- MongoDB Atlas integration

---

## Tech Stack

### Frontend

- React
- Redux
- Redux Thunk
- Redux Form
- React Router
- Materialize CSS
- Axios

### Backend

- Node.js
- Express.js
- Passport.js
- Cookie Session
- Body Parser

### Database

- MongoDB Atlas
- Mongoose

### External Services

- Google OAuth 2.0
- Stripe
- SendGrid
- Render

---

## Project Structure

```text
server/
├── client/
│   ├── src/
│   │   ├── actions/
│   │   ├── components/
│   │   ├── reducers/
│   │   └── utils/
│   └── public/
├── config/
├── middlewares/
├── models/
├── routes/
├── services/
└── index.js
```

## Implemented Routes

### Authentication

```text
/auth/google
/auth/google/callback
/api/current_user
/api/logout
```

### Billing

```text
/api/stripe
```

### Surveys

```text
/api/surveys
/api/surveys/thanks
```

---

## Installation

### Clone Repository

```bash
git clone https://github.com/Khushimushi/survey-feedback-platform.git
cd survey-feedback-platform/server
```

### Install Dependencies

Backend:

```bash
npm install
```

Frontend:

```bash
cd client
npm install
```

---

## Running the Application

### Development Mode

```bash
npm run dev
```

### Backend Only

```bash
node index.js
```

---

## Environment Variables

Required variables:

```env
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
COOKIE_KEY=
MONGO_URI=

STRIPE_SECRET_KEY=
REACT_APP_STRIPE_KEY=

SEND_GRID_KEY=
REDIRECT_DOMAIN=
```

---

## Current Progress

- Authentication system completed
- MongoDB integration completed
- Redux and Redux Form configured
- Survey creation workflow completed
- Survey review page completed
- Email validation implemented
- SendGrid integration configured
- Billing and credits system implemented
- Render deployment configured
- Production routing implemented

---

## Planned Features

- Survey email delivery
- Survey response tracking
- Webhook processing
- Survey analytics dashboard
- Response statistics
- Survey management interface

---

## Deployment

The application is deployed using:

- Render
- MongoDB Atlas
- Google OAuth
- SendGrid

---
