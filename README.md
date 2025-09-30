# Mini AI Chatbot

## Objective

The objective of this project is to build a simple, web-based chatbot that provides professional advice and answers to common workplace questions.  
The chatbot uses a **fixed knowledge base** and optionally falls back to a **LLaMA model via Groq API** for questions not in the knowledge base.  
It also displays recent chat history, offering users a fast and user-friendly way to get productivity tips, remote work guidance, and more.  
This project demonstrates how to integrate a React frontend with a Flask backend for a complete, interactive web application.

---

## Features

- Ask professional questions (productivity, remote work, task prioritization, startup funding, etc.)
- Answers matched from a **knowledge base** or fallback **LLM via Groq API**
- See the last 10 questions and answers as **chat history**
- Fast, responsive UI
- Easy to run locally
- Clear, concise, and professional answers (1–2 sentences)

---

## Project Structure



## Project Structure

```
mini-ai-chatbot/
├── backend/
│   ├── app.py                # Flask backend main app
│   ├── knowledge_base.py     # Q&A pairs for chatbot
│   ├── chat_history.json     # Stores chat history
│   ├── requirements.txt      # Python dependencies
│   └── README.md
├── frontend/
│   ├── public/
│   │   └── index.html        # HTML template
│   ├── src/
│   │   ├── App.jsx           # Main React component
│   │   ├── index.js          # React entry point
│   │   └── components/
│   │       ├── ChatInput.jsx     # Input box component
│   │       ├── ChatDisplay.jsx   # Bot answer display
│   │       └── ChatHistory.jsx   # Chat history display
│   ├── package.json          # Node.js dependencies
│   └── README.md
└── README.md                 # Project overview
```

---

## Setup & Run Instructions

### 1. Backend (Flask)

- Navigate to the backend folder:
  ```bash
  cd mini-ai-chatbot/backend
  ```
- Create and activate a Python virtual environment:
  ```bash
  python -m venv venv
  venv\Scripts\activate
  ```
- Install dependencies:
  ```bash
  pip install -r requirements.txt
  ```
- Start the Flask server:
  ```bash
  python app.py
  ```
- The backend runs at `http://127.0.0.1:5000/`

### 2. Frontend (React)

- Navigate to the frontend folder:
  ```bash
  cd mini-ai-chatbot/frontend
  ```
- Install dependencies:
  ```bash
  npm install
  ```
- Start the React app:
  ```bash
  npm start
  ```
- The frontend runs at `http://localhost:3000/`

---

## Usage

-Open http://localhost:3000 in your browser.
-Type a question and click Send.
-View answers and the last 10 questions in the chat history.
-Clear chat history using the Clear button (calls /clear).

---

## Libraries & Frameworks Used

- **Backend:** Flask, Flask-CORS
- **Frontend:** React, react-scripts

---

## Assumptions

-The chatbot answers are matched from a fixed knowledge base.
-If a question is not in the knowledge base, it uses a LLaMA model via Groq API as a fallback.
-Chat history is stored locally in chat_history.json.
- The app is intended for local/demo use only.

---

## License

MIT

---

## Author

Hasna
