export const handler = async (event) => {
  try {
    const { message } = JSON.parse(event.body);

    // ⚠️ TEMP reply habang wala pang API key
    if (!process.env.OPENAI_API_KEY) {
      return {
        statusCode: 200,
        body: JSON.stringify({
          reply: "⚠️ GPT-4o not connected yet. Add API key to enable AI."
        })
      };
    }

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "gpt-4o",
        messages: [{ role: "user", content: message }]
      })
    });

    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify({
        reply: data.choices[0].message.content
      })
    };

  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ reply: "Server error" })
    };
  }
};
