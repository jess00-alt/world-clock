function updateTime() {

let sãoPauloElement = document.querySelector("#são-paulo");
let sãoPauloDateElement = document.querySelector("#são-paulo-date");
let sãoPauloTimeElement = document.querySelector("#brazil-timezone");
let sãoPauloTime= moment().tz("America/Sao_Paulo"
)
sãoPauloDateElement.innerHTML = sãoPauloTime.format("MMMM Do YYYY");
sãoPauloTimeElement.innerHTML = sãoPauloTime.format("h:mm:ss [<small>]A[</small]");

let tokyoElement = document.querySelector("#tokyo");
let tokyoDateElement = document.querySelector("#tokyo-date");
let tokyoTimeElement = document.querySelector("#japan-timezone");
let tokyoTime= moment().tz("Asia/Tokyo"
)
tokyoDateElement.innerHTML = tokyoTime.format("MMMM Do YYYY");
tokyoTimeElement.innerHTML = tokyoTime.format("h:mm:ss [<small>]A[</small]");

let capeTownElement = document.querySelector("#cape-town");
let capeTownDateElement = document.querySelector("#cape-town-date");
let capeTownTimeElement = document.querySelector("#south-africa-timezone");
let capeTownTime= moment().tz("Africa/Johannesburg"
)
capeTownDateElement.innerHTML = capeTownTime.format("MMMM Do YYYY");
capeTownTimeElement.innerHTML = capeTownTime.format("h:mm:ss [<small>]A[</small]");
}

updateTime();
setInterval(updateTime, 1000);
