# Mini AI Chatbot - Frontend

This is the frontend part of the Mini AI Chatbot project, built using React. The application allows users to ask professional questions and receive answers from a simple AI chatbot.

## Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd mini-ai-chatbot/frontend
   ```

2. **Install Dependencies**
   Make sure you have Node.js installed. Then, run the following command to install the required packages:
   ```bash
   npm install
   ```

3. **Run the Application**
   Start the development server with:
   ```bash
   npm start
   ```
   This will open the application in your default web browser at `http://localhost:3000`.

## Project Structure

- `src/`: Contains the source code for the React application.
  - `App.jsx`: Main component managing state and API connection.
  - `components/`: Contains reusable components.
    - `ChatHistory.jsx`: Displays chat history.
    - `ChatInput.jsx`: Input box for user questions.
    - `ChatDisplay.jsx`: Displays chatbot responses.
  - `index.js`: Entry point for the React application.

- `public/`: Contains static files.
  - `index.html`: Main HTML template for the application.

## Libraries/Frameworks Used

- React: A JavaScript library for building user interfaces.
- Axios: For making HTTP requests to the backend API.

## Assumptions Made

- The backend API is running and accessible at the expected endpoint.
- The user has a basic understanding of how to run a React application.

Feel free to reach out if you have any questions or need further assistance!