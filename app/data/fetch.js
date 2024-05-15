export async function getQuote() {
  const url =
    "https://quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com/quote?token=ipworld.info";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "1430e9bfc9mshc0854d9e7968147p148b3bjsn8a4482b01ec8",
      "X-RapidAPI-Host":
        "quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(`data from the fetch function`, result);
    return result;
  } catch (error) {
    console.error(error);
  }
}
