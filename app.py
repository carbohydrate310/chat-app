from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

messages = []

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/send", methods=["POST"])
def send():
    text = request.json.get("text")
    if text:
        messages.append(text)
    return jsonify({"status": "ok"})

@app.route("/messages")
def get_messages():
    return jsonify(messages)

if __name__ == "__main__":
    app.run(debug=True)
