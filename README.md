# Online Learning Platform - MERN Stack Setup Guide

## Project Structure
```
Assignment No.10/
├── Online-Learning-Platform-Client/    # React Frontend (Port 5173)
└── Online-Learning-Platform-Server/    # Node.js Backend (Port 5000)
```

## Quick Start Commands

### 1. Start Backend Server (Port 5000)
```bash
cd "c:\Assignment No.10\Online-Learning-Platform-Server"
npm install
npm start
```
Backend will run at: http://localhost:5000

### 2. Start Frontend Server (Port 5173)
```bash
cd "c:\Assignment No.10\Online-Learning-Platform-Client"
npm install
npm run dev
```
Frontend will run at: http://localhost:5173

## API Configuration
- Backend Base URL: `http://localhost:5000`
- All API calls from React use this base URL
- API config file: `src/config/api.js`

## Available API Endpoints
- GET `/courses` - All courses with search/filter
- GET `/courses/:id` - Single course
- GET `/courses/featured` - Featured courses
- POST `/enroll` - Enroll in course
- GET `/enroll/:email` - User enrollments
- GET `/categories` - Course categories
- POST `/users` - Add user
- GET `/users/:email` - Get user by email

## Environment Setup
1. Backend uses MongoDB connection string in `.env`
2. Frontend connects to backend via `http://localhost:5000`
3. No CORS issues as backend has CORS enabled

## Production Build (Optional)
To serve React from Express on same port:

1. Build React:
```bash
cd "c:\Assignment No.10\Online-Learning-Platform-Client"
npm run build
```

2. Add to backend `index.js`:
```js
// Serve static files from React build
app.use(express.static(path.join(__dirname, '../Online-Learning-Platform-Client/dist')));

// Serve React app for all non-API routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../Online-Learning-Platform-Client/dist/index.html'));
});
```

## Troubleshooting
- If port 5000 is busy: Change backend port in `index.js`
- If port 5173 is busy: Change frontend port in `vite.config.js`
- API calls failing: Check backend is running on port 5000
- CORS errors: Backend has CORS enabled for all origins