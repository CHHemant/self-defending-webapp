# Self-Defending WebApp

A demo web app that rotates login fields and CSRF tokens to defend against attacks. Detects and logs SQL injection, XSS, and suspicious login attempts. Includes an admin dashboard to view attack logs. For cybersecurity learning and awareness.

## How to Run

### Backend
```bash
cd backend
npm install
node server.js
```

### Frontend
```bash
cd frontend
npm install
npm start
```

- Login with username: `admin` and password: `password123`
- Try SQLi or XSS in the username/password fields and check the dashboard!
