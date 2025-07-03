# Self-Defending WebApp

A demo web app that rotates login fields and CSRF tokens to defend against attacks. Detects and logs SQL injection, XSS, and suspicious login attempts. Includes an admin dashboard to view attack logs. For cybersecurity learning and awareness.

## How to Run the Self-Defending WebApp

### 1. Clone or Download the Project
If you haven’t already, clone or download the project files to your local machine.

### 2. Start the Backend

1. Open a terminal window.
2. Navigate to the backend directory:
   ```bash
   cd self-defending-webapp/backend
   ```
3. Install backend dependencies:
   ```bash
   npm install
   ```
4. Start the backend server:
   ```bash
   node server.js
   ```
   The backend should now be running on [http://localhost:3001](http://localhost:3001).

---

### 3. Start the Frontend

1. Open a new terminal window.
2. Navigate to the frontend directory:
   ```bash
   cd self-defending-webapp/frontend
   ```
3. Install frontend dependencies:
   ```bash
   npm install
   ```
4. Start the React frontend:
   ```bash
   npm start
   ```
   This will open the app in your browser at [http://localhost:3000](http://localhost:3000) by default.

---

### 4. Usage

- **Login Credentials:**  
  - Username: `admin`  
  - Password: `password123`
- Try logging in with normal and malicious inputs (like SQL injection or XSS payloads) to see how attacks are detected and logged.
- Click "Go to Admin Dashboard" to view the attack logs.

---

### 5. Troubleshooting

- Make sure both backend (port 3001) and frontend (port 3000) are running.
- If you have issues with CORS or API requests, confirm the backend URL in the frontend code matches the server (e.g., `http://localhost:3001`).

---

**Enjoy exploring cybersecurity with your Self-Defending WebApp!**
