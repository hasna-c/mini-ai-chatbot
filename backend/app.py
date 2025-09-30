from flask import Flask, request, jsonify
from flask_cors import CORS
from knowledge_base import knowledge_base
import json, os, requests
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
CORS(app)

CHAT_HISTORY_FILE = 'chat_history.json'
QROQ_API_KEY = os.getenv("GROQ_API_KEY")

def load_chat_history():
    if os.path.exists(CHAT_HISTORY_FILE):
        with open(CHAT_HISTORY_FILE, 'r') as f:
            try:
                return json.load(f)
            except json.JSONDecodeError:
                return []
    return []

def save_chat_history(history):
    with open(CHAT_HISTORY_FILE, 'w') as f:
        json.dump(history, f, indent=2)

@app.route('/clear', methods=['POST'])
def clear_history():
    save_chat_history([])
    return jsonify({"status": "success"})

def get_answer(question):
    for q, a in knowledge_base.items():
        if question.lower() in q.lower():
            return a
    return query_groq_api(question)

def query_groq_api(question):
    if not QROQ_API_KEY:
        return "Groq API key not set. Please set GROQ_API_KEY in your environment."

    url = "https://api.groq.com/openai/v1/chat/completions"
    headers = {
        "Authorization": f"Bearer {QROQ_API_KEY}",
        "Content-Type": "application/json"
    }
    payload = {
        "model": "llama-3.3-70b-versatile",
        "messages": [
            {
                "role": "system",
                "content": (
                    "You are a professional career assistant chatbot. "
                    "Provide answers in 1–2 concise sentences. "
                    "Keep them clear, actionable, and easy to read. "
                    "Avoid long paragraphs, numbered lists, or Markdown formatting. "
                    "Make them slightly conversational but professional."
                )
            },
            {"role": "user", "content": question}
        ],
        "max_tokens": 120
    }

    try:
        response = requests.post(url, headers=headers, json=payload, timeout=10)
        response.raise_for_status()
        data = response.json()
        return data["choices"][0]["message"]["content"]
    except requests.exceptions.RequestException:
        return "Sorry, I couldn't fetch an answer right now."
    except (KeyError, IndexError):
        return "Sorry, I couldn't parse the response from the API."

@app.route('/ask', methods=['POST'])
def ask():
    data = request.get_json()
    user_question = data.get('question', '')
    answer = get_answer(user_question)

    chat_history = load_chat_history()
    chat_history.append({"question": user_question, "answer": answer})
    save_chat_history(chat_history)

    return jsonify({"answer": answer})

@app.route('/history', methods=['GET'])
def history():
    return jsonify({"history": load_chat_history()[-10:]})

if __name__ == '__main__':
    app.run(debug=True)
