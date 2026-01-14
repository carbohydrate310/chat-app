const chatBody = document.getElementById("chatBody");
const input = document.getElementById("messageInput");

function sendMessage() {
  const text = input.value.trim();
  if (!text) return;

  addMessage(text);

  fetch("/send", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text })
  });

  input.value = "";
}

function addMessage(text) {
  const div = document.createElement("div");
  div.className = "message me";
  div.innerText = text;
  chatBody.appendChild(div);
  chatBody.scrollTop = chatBody.scrollHeight;
}
