/* async function sampleApi() {
  try {
    const bitCoinApi = await fetch(
      "https://api.sampleapis.com/bitcoin/historical_prices",
    );

    if (!bitCoinApi.ok) {
      throw new Error("Request failed");
    }

    const bitSuccess = await bitCoinApi.json();
    console.log("Success", bitSuccess);

    const bitDates = document.querySelector("#Bitcon-Dates");
    const dateList = bitDates.querySelector("ul");
    const bitPrices = document.querySelector("#Bitcon-Prices");
    const priceList = bitPrices.querySelector("ul");

    for (let i = 0; i < bitSuccess.length; i++) {
      const bitPriceData = bitSuccess[i].Price;
      console.log("Price", bitPriceData);

      const bitDateData = bitSuccess[i].Date;
      console.log("Date:", bitDateData);

      const date = document.createElement("li");
      date.textContent = `Date: ${bitDateData}`;
      dateList.append(date);

      const price = document.createElement("li");
      price.textContent = `Price: ${bitPriceData}`;
      priceList.append(price);
    }
  } catch (error) {
    console.log(error.message);
  }
}

sampleApi();
 */
