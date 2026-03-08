/* API */
// -------------------------------

/* async function myGithub() {
  try {
    const gitHubApi = await fetch(
      `https://api.github.com/users/ArielTheFirstGen-Economist`,
    );

    if (!gitHubApi.ok) {
      throw new Error("Request failed");
    }

    const gitHubData = await gitHubApi.json();
    console.log("success", gitHubData);

    const repoData = await fetch(gitHubData.repos_url);
    console.log("Repo Url", repoData);

    const repoNames = await repoData.json();
    console.log("Success! View your repos names!", repoNames);

    const projectSelection = document.querySelector("#Bitcon-Prices");
    const projectList = projectSelection.querySelector("ul");
    projectList.classList.add("pflex-list"); 

    for (let i = 0; i < repoNames.length; i++) {
      const project = document.createElement("li");
      project.textContent = `${repoNames[i].name}`;
      projectList.append(project);
    }
  } catch (error) {
    console.log(error.message);
  }
}

myGithub(); */

async function sampleApi() {
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

// API for github

/* async function myGithub() {
  try {
    const gitHubApi = await fetch(
      `https://api.github.com/users/ArielTheFirstGen-Economist`,
    );

    if (!gitHubApi.ok) {
      throw new Error("Request failed");
    }

    const gitHubData = await gitHubApi.json();
    console.log("success", gitHubData);

    const repoData = await fetch(gitHubData.repos_url);
    console.log("Repo Url", repoData);

    const repoNames = await repoData.json();
    console.log("Success! View your repos names!", repoNames);

    const projectSelection = document.querySelector("#Bitcon-Prices");
    const projectList = projectSelection.querySelector("ul");

    for (let i = 0; i < repoNames.length; i++) {
      const project = document.createElement("li");
      project.textContent = `${repoNames[i].name}`;
      projectList.append(project);
    }
  } catch (error) {
    console.log(error.message);
  }
}

myGithub();
 */
