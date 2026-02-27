async function send() {
  const input = document.getElementById("msg");
  const chat = document.getElementById("chat");
  const text = input.value.trim();
  if (!text) return;

  chat.innerHTML += `<div class="user">You: ${text}</div>`;
  input.value = "";

  try {
    const res = await fetch("/.netlify/functions/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: text })
    });

    if (!res.ok) throw new Error("Server error");

    const data = await res.json();
    chat.innerHTML += `<div class="bot">AI: ${data.reply}</div>`;

  } catch (err) {
    chat.innerHTML += `<div class="error">❌ Server unavailable</div>`;
  }

  chat.scrollTop = chat.scrollHeight;
}
