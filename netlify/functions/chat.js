export const handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      reply: process.env.OPENAI_API_KEY
        ? "✅ API key detected"
        : "❌ API key NOT detected"
    })
  };
};    return {
      statusCode: 500,
      body: JSON.stringify({ reply: "Server error" })
    };
  }
};
