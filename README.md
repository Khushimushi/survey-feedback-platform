# Survey Feedback Platform

A full-stack survey and feedback collection platform built using the MERN stack. The application allows users to authenticate with Google, purchase credits, create email-based surveys, distribute them through SendGrid, track responses using webhooks and view survey statistics through a dashboard.

## Features

### Authentication & User Management

* Google OAuth Authentication using Passport.js
* Cookie-based session management
* Persistent login state
* User profile retrieval
* Secure logout functionality

### Billing System

* Stripe payment integration
* Credit-based survey creation
* User credit tracking and updates
* Credit validation middleware

### Survey Management

* Multi-step survey creation workflow
* Dynamic form generation using Redux Form
* Form validation and email validation
* Survey review page before submission
* Survey storage using MongoDB
* Survey ownership tracking

### Email Infrastructure

* SendGrid integration
* Custom Mailer service
* Dynamic survey email generation
* Recipient management using subdocuments
* Verified sender configuration

### Response Tracking

* SendGrid Event Webhooks integration
* Ngrok-based local webhook testing
* Survey response tracking
* Duplicate response prevention
* Automatic vote counting (Yes / No)
* Recipient response status updates

### Dashboard

* Survey listing page
* Survey statistics display
* Response count tracking
* Survey creation date display
* User-specific survey retrieval

### Deployment

* Render deployment configuration
* Production Express + React integration
* MongoDB Atlas integration
* Environment-based configuration management

---

## Tech Stack

### Frontend

* React
* Redux
* Redux Thunk
* Redux Form
* React Router
* Axios
* Materialize CSS

### Backend

* Node.js
* Express.js
* Passport.js
* Cookie Session
* Lodash

### Database

* MongoDB Atlas
* Mongoose

### External Services

* Google OAuth 2.0
* Stripe
* SendGrid
* Ngrok
* Render

---

## Project Structure

```text
server/
├── client/
│   ├── public/
│   └── src/
│       ├── actions/
│       ├── components/
│       ├── reducers/
│       └── utils/
├── config/
├── middlewares/
├── models/
├── routes/
├── services/
│   └── emailTemplates/
└── index.js
```

## Implemented API Routes

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
GET  /api/surveys
POST /api/surveys
POST /api/surveys/webhooks
GET  /api/surveys/:surveyId/:choice
```

---

## Installation

### Clone Repository

```bash
git clone https://github.com/Khushimushi/survey-feedback-platform.git
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

### Ngrok (Webhook Testing)

```bash
ngrok http 5000
```

---

## Environment Variables

Create appropriate development and production environment files.

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

* Authentication system completed
* Google OAuth integration completed
* Stripe billing integration completed
* Credit management implemented
* Survey creation workflow completed
* Redux Form integration completed
* Email validation implemented
* SendGrid integration completed
* Survey email generation completed
* Webhook processing implemented
* Survey response tracking completed
* Dashboard and survey listing completed
* MongoDB Atlas integration completed
* Render deployment configured

---

## Future Improvements

* Survey analytics dashboard with charts
* Survey deletion functionality
* Survey editing functionality
* User profile management
* Improved email templates
* Advanced response analytics
* Pagination for survey listings

---

## Deployment

The application is configured for deployment using:

* Render
* MongoDB Atlas
* Google OAuth
* Stripe
* SendGrid

---
