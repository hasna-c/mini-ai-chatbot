# Backend README for Mini AI Chatbot

## Overview
This is the backend component of the Mini AI Chatbot project, which provides a REST API for handling user questions and returning answers based on a predefined knowledge base. The backend is built using Flask (or FastAPI) and is designed to work seamlessly with the frontend React application.

## Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd mini-ai-chatbot/backend
   ```

2. **Create a Virtual Environment**
   It is recommended to create a virtual environment to manage dependencies.
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   ```

3. **Install Dependencies**
   Install the required libraries listed in `requirements.txt`.
   ```bash
   pip install -r requirements.txt
   ```

4. **Run the Application**
   Start the Flask or FastAPI application.
   ```bash
   python app.py
   ```
   The API will be available at `http://127.0.0.1:5000/ask` (or the appropriate port for FastAPI).

## API Endpoint
- **POST /ask**
  - **Request Body**: 
    ```json
    {
      "question": "Your question here"
    }
    ```
  - **Response**:
    ```json
    {
      "answer": "The answer to your question."
    }
    ```

## Knowledge Base
The knowledge base is implemented in `knowledge_base.py`, containing a set of predefined Q&A pairs. The backend matches user questions to the closest entry in this knowledge base and returns the best answer.

## Chat History
The chat history is stored in `chat_history.json`, allowing for persistence of user questions and answers.

## Libraries Used
- Flask or FastAPI
- JSON handling libraries (if needed)

## Assumptions Made
- The user has Python installed on their machine.
- The user is familiar with basic command line operations.
- The frontend is set up and running separately.

For any issues or questions, please refer to the frontend README or the main project README.