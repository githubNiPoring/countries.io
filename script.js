const submit = document.getElementById("submit-btn");

submit.addEventListener("click", searchText);

function searchText() {
  let searchInputText = document.getElementById("input-text").value.trim();

  const api = `https://restcountries.com/v3.1/name/${searchInputText.toLowerCase()}`;

  if (searchInputText.length > 0) {
    fetch(api)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log(
          Object.values(data[0].languages).toString().split(",").join(", ")
        );

        let resultHTML = document.getElementById("result");
        let infoItem = document.getElementById("info-item");
        resultHTML.innerHTML = `
            <img class="flag" src="${data[0].flags.svg}" alt="" />
        `;
        infoItem.innerHTML = `
            <div class="capital">
                <h4>CAPITAL: </h4>
                <p style="margin-left: 5px"> ${data[0].capital}</p>
            </div>
            <div class="continent">
                <h4>CONTINENT: </h4>
                <p style="margin-left: 5px"> ${data[0].continents[0]}</p>
            </div>
            <div class="population">
                <h4>POPULATION: </h4>
                <p style="margin-left: 5px"> ${data[0].population}</p>
            </div>
            <div class="currency">
                <h4>CURRENCY: </h4>
                <p style="margin-left: 5px"> ${
                  data[0].currencies[Object.keys(data[0].currencies)].name
                }</p>
                <p style="margin-left: 5px"> (${
                  data[0].currencies[Object.keys(data[0].currencies)].symbol
                })</p>
            </div>
            <div class="common-language">
                <h4>COMMON LANGUAGE: </h4>
                <p style="margin-left: 5px"> ${Object.values(data[0].languages)
                  .toString()
                  .split(",")
                  .join(", ")}</p>
            </div>
        `;
      });
  }
}
