# 📘 Quotes That Inspire – Backend API

Backend service for **Quotes That Inspire**, a lightweight inspirational quotes platform built with Node.js and Express.

---

## 🚀 Live API

```
https://quotes-that-inspire-server.onrender.com
```

---

## 🧰 Tech Stack

- Node.js
- Express
- CORS
- dotenv

---

## 📂 API Endpoints

| Method | Endpoint        | Description            |
| ------ | --------------- | ---------------------- |
| GET    | /healthcheck    | API health status      |
| GET    | /getAllQuotes   | Returns all quotes     |
| GET    | /getRandomQuote | Returns a random quote |

---

## ⚙️ Local Setup

```bash

npm install
cp .env.example .env
npm run dev
```

---

## 🌐 Environment Configuration

All required environment variables are documented in `.env.example`.

```
# Public name of your application
APP_NAME=<YOUR_APP_NAME>

# Public base URL of your backend
APP_URL=<YOUR_BACKEND_PUBLIC_URL>

# Port your backend server should run on (Render uses 10000)
APP_PORT=<YOUR_BACKEND_PORT>

# Enable maintenance mode (true / false)
APP_IN_MAINTENANCE=<true_or_false>

``

---

## 🛡 Production CORS

This API is locked to only allow requests from the official frontend deployment.

---

## 🧠 Author

Built by Meghsham Kapure
```
