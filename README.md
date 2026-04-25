# 🌸 Vayana — Your AI-Based Emotional Companion

_Vayana is not a therapist. It's a friend in your darkest hours._

---

## 🧠 What is Vayana?

In an era where emotional distress and loneliness silently affect millions, **Vayana** offers a safe space — a digital emotional companion always ready to listen. Designed to provide subtle, warm, and non-clinical support, Vayana helps users feel heard, understood, and gently guided towards emotional clarity.

---

## 💡 Why We Built It

Many individuals struggle with seeking professional help due to **stigma, cost, or inaccessibility**. We envisioned something approachable yet meaningful — **an empathetic companion, not a therapist** — to offer support during difficult moments.

---

## 🛠 Tech Stack

### 🔹 Frontend
- **Next.js** & **React** – for a fast, dynamic, and responsive user interface

### 🔹 Backend
- **MongoDB Atlas** – for unstructured emotional logs and conversations
- **PostgreSQL** – for structured user data and authentication

### 🔹 Authentication & Security
- **JWT** – for secure authentication
- **bcrypt** – for password hashing

### 🔹 File Uploads & Storage
- **Multer** – for handling file uploads
- **Cloudinary** – for secure cloud storage

### 🔹 AI & Emotional Intelligence
- Prompt-engineered AI designed to:
  - Detect emotional cues
  - Offer empathetic and context-aware responses
  - Avoid clinical suggestions while promoting emotional self-awareness

---

## 🤖 New Feature: Vayana AI Video Assistant

Vayana now includes a smart video assistant powered by **Google Generative AI**. This feature provides:
- Auto-summarization of video content
- Smart chapter and timestamp generation
- An interactive, animated floating widget on video pages

---

## 🌐 Live

> Coming soon

## 📦 Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/devprashant19/Vayana.git
cd Vayana
```
### 2. Install dependencies
```bash
npm install
```
### 3. Set up environment variables
Create a `.env.local` file in the root and add:
```bash
# Frontend
DATABASE_URL=your_postgres_connection
AGENT_ID=your_ai_agent_id
XI_API_KEY=your_agent_api_key
NEXT_PUBLIC_GEMINI_API_KEY=your_google_gemini_api_key

# Backend 
MONGODB_URI=your_mongodb_connection
DATABASE_URL=your_postgres_connection
CORS_ORIGIN=*
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
REFRESH_TOKEN_SECRET=your_refresh_token_secret
REFRESH_TOKEN_EXPIRY=your_refresh_token_expiry
ACCESS_TOKEN_SECRET=your_access_token_secret
ACCESS_TOKEN_EXPIRY=your_access_token_expiry
PORT=your_port
```
### 4. Run the app
This project is currently under development and may encounter some issues

**Frontend**
```bash
npm run dev
```

**Backend**
```bash
npm run start
```
