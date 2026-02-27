async function send() {
  const input = document.getElementById("msg");
  const chat = document.getElementById("chat");
  const typing = document.getElementById("typing");

  const text = input.value.trim();
  if (!text) return;

  chat.innerHTML += `<div class="user">${text}</div>`;
  input.value = "";
  typing.style.display = "block";

  try {
    const res = await fetch("/.netlify/functions/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: text })
    });

    const data = await res.json();
    typing.style.display = "none";
    chat.innerHTML += `<div class="bot">${data.reply}</div>`;
  } catch {
    typing.style.display = "none";
    chat.innerHTML += `<div class="bot">❌ Server error</div>`;
  }

  chat.scrollTop = chat.scrollHeight;
}
