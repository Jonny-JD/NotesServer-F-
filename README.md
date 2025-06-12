# Notes Frontend

This is the frontend part of my personal note-taking web application. It allows users to create, view, and browse public and private notes. The frontend communicates with the backend REST API and manages user sessions via browser cookies.

---

## Technologies

- React  
- Vite (build tool)  
- TypeScript  
- React Router  
- LESS (for styling)  
- nginx (serving static files)

---

## About

This project helped me learn how to build a modern React application using Vite and TypeScript. It demonstrates handling user authentication via session cookies, protected routes, and dynamic data fetching from a backend API.

---

## Setup

### Installation

1. Clone the repo  
2. Run:

npm install

### Running locally

1. Make sure backend API is running and accessible  
2. Set environment variable for API base URL (e.g. in `.env` file):

VITE_API_BASE_URL=http://localhost:8080

3. Start frontend dev server:

npm run dev

### Building for production

npm run build

### Serving production build

Use nginx or any static file server to serve the contents of the `dist` folder.

---

## Notes

This frontend project complements the backend service to provide a full-stack note-taking application. It is part of my portfolio to showcase my skills with React, TypeScript, and modern frontend tooling.
