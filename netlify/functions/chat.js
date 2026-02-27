export const handler = async (event) => {
  try {
    const { message } = JSON.parse(event.body);

    // TEMP response muna (para siguradong gumana)
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        reply: "Hello! Gumagana na ang AI chat mo ✅"
      })
    };

  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Server error" })
    };
  }
};
