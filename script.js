const baseUrl = "http://api.zippopotam.us/us/";

const options = {
  method: "GET",
  headers: {
    Accept: "application/json",
  },
  mode: "cors",
  cache: "default",
};

function handleClick() {
  let stateRef = document.getElementById("state-name");
  let cityRef = document.getElementById("city-name");
  let latRef = document.getElementById("lat-name");
  let longRef = document.getElementById("long-name");
  let countryRef = document.getElementById("country-name");
  let countryAbRef = document.getElementById("country-ab");
  let map = document.getElementById("map");
  let input = document.querySelector("#zip").value;
  let result = document.getElementById("result");
  fetch(baseUrl + input, options).then((response) => {
    response.json().then((data) => {
      const obj = {
        state: data.places[0]["state"],
        city: data.places[0]["place name"],
        longitude: data.places[0]["longitude"],
        latitude: data.places[0]["latitude"],
        stateName: data.places[0]["state"],
        stateAbrev: data.places[0]["state abbreviation"],
        country: data["country"],
        countryAb: data["country abbreviation"],
      };
      result.style.display = "flex";
      stateRef.textContent = obj.state;
      cityRef.textContent = obj.city;
      latRef.textContent = obj.latitude;
      longRef.textContent = obj.longitude;
      countryRef.textContent = obj.country;
      countryAbRef.textContent = obj.countryAb;
      map.style.backgroundImage = `url("./states/${obj.stateAbrev}.svg")`;
      map.style.backgroundSize = "100% 100%";
      map.style.backgroundSize = "395px 370px";
      map.style.transition = "all 0.5s ease-in-out";
      map.style.transitionDelay = ".5s";
    });
    return response.json;
  });
}
