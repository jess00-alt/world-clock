function updateTime() {
let sãoPauloElement = document.querySelector("#são-paulo");

if(sãoPauloElement) {
let sãoPauloDateElement = document.querySelector("#são-paulo-date");
let sãoPauloTimeElement = document.querySelector("#brazil-timezone");
let sãoPauloTime= moment().tz("America/Sao_Paulo"
)
sãoPauloDateElement.innerHTML = sãoPauloTime.format("MMMM Do YYYY");
sãoPauloTimeElement.innerHTML = sãoPauloTime.format("h:mm:ss [<small>]A[</small>]");
}

let tokyoElement = document.querySelector("#tokyo");
if (tokyoElement) {
let tokyoDateElement = document.querySelector("#tokyo-date");
let tokyoTimeElement = document.querySelector("#japan-timezone");
let tokyoTime= moment().tz("Asia/Tokyo"
)
tokyoDateElement.innerHTML = tokyoTime.format("MMMM Do YYYY");
tokyoTimeElement.innerHTML = tokyoTime.format("h:mm:ss [<small>]A[</small>]");
}
 
let madridElement = document.querySelector("#madrid");
if (madridElement) {
let madridDateElement = document.querySelector("#madrid-date");
let madridTimeElement = document.querySelector("#madrid-timezone");
let madridTime= moment().tz("Europe/Madrid")
madridDateElement.innerHTML = madridTime.format("MMMM Do YYYY");
madridTimeElement.innerHTML = madridTime.format("h:mm:ss [<small>]A[</small>]");
}
}

function updateCity (event) {
 let cityTimeZone = event.target.value;
 let cityName = cityTimeZone.replace("_", " ").split("/")[1];
 let cityId = cityName.toLowerCase().replace(/ /g, "-");
 let cityTime = moment().tz(cityTimeZone)
 let citiesElement = document.querySelector("#cities")

  const emojiMap = {
    "Auckland": "🇳🇿",
    "Johannesburg": "🇿🇦",
    "Santiago": "🇨🇱",
    "Seoul": "🇰🇷",
    "Oslo": "🇳🇴"
  };

  let emoji = emojiMap[cityName] || "";

 citiesElement.innerHTML = `
    <div class="city" id="${cityId}">
      <div class="info">
        <h2>${cityName} <span>${emoji}</span></h2>
        <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
      </div>
      <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format("A")}</small></div>
    </div>
  `;

}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city")
citiesSelectElement.addEventListener("change", updateCity);
