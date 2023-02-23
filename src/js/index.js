let sunrise;
let saintsData = [];
let today = new Date();


const stime = document.querySelector("body > main > section.ephemeride > p:nth-child(3) > span");
const stoday = document.querySelector("body > main > section.ephemeride > p:nth-child(2) > span");
const psunrise = document.querySelector("body > main > section.ephemeride > p:nth-child(4) > span");
const ptempmax = document.querySelector("body > main > section.temp > div > figure:nth-child(2) > p");
const ptempmin = document.querySelector("body > main > section.temp > div > figure:nth-child(1) > p");
const ptempav = document.querySelector("body > main > section.temp > div > figure:nth-child(3) > p");

async function fetchsunrise(insee = 31555) {
    await fetch(`https://api.meteo-concept.com/api/ephemeride/0?token=6420e2b831dad423bc7ba0412ce1a74f8f094153f4b2ea617612d0c72b7e8ead&insee=${insee}`).then((res) => res.json())
        .then((data) => sunrise = data.ephemeride.sunrise)

    psunrise.innerHTML = sunrise;

}

async function displayPrevText() {

    const utils = await import("./utils.js");

    for (let i = 0; i < 3; i++) {
        document.querySelector(`body > main > table > tbody > tr:nth-child(${i + 1}) > td:nth-child(3)`).innerHTML = utils.prevText(citydata.forecast[i].weather);
    }
}


async function fetchMeteoData(insee = 31555) {


    await fetch(`https://api.meteo-concept.com/api/forecast/daily?token=6420e2b831dad423bc7ba0412ce1a74f8f094153f4b2ea617612d0c72b7e8ead&insee=${insee}`).then((res) => res.json())
        .then((data) => citydata = data) // meteoData = data.forecast


    document.querySelector("body > header > h1 > span").textContent = citydata.city.name;

    ptempmax.innerHTML = citydata.forecast[0].tmax;
    ptempmin.innerHTML = citydata.forecast[0].tmin;
    ptempav.innerHTML = Math.round((citydata.forecast[0].tmax + citydata.forecast[0].tmin) / 2);





    displayPrevText();



    for (let i = 0; i < 3; i++) {

        if (citydata.forecast[i].weather == 0) {

            document.querySelector(`body > main > table > tbody > tr:nth-child(${i + 1}) > td:nth-child(2) > img`).src = "./src/img/ensoleille.png";
        }
        else if (citydata.forecast[i].weather == 1) {
            document.querySelector(`body > main > table > tbody > tr:nth-child(${i + 1}) > td:nth-child(2) > img`).src = "./src/img/eclaircies.png";
        }
        else if (citydata.forecast[i].weather > 1 && citydata.forecast[i].weather <= 7) {
            document.querySelector(`body > main > table > tbody > tr:nth-child(${i + 1}) > td:nth-child(2) > img`).src = "./src/img/partly_cloudy_day_sun_clouds_weather_icon_177560.png"
        }
        else if (citydata.forecast[i].weather > 7 && citydata.forecast[i].weather <= 78) {
            document.querySelector(`body > main > table > tbody > tr:nth-child(${i + 1}) > td:nth-child(2) > img`).src = "./src/img/heavy_rain.png"
        }
        else if (citydata.forecast[i].weather > 100 && citydata.forecast[i].weather <= 142) {
            document.querySelector(`body > main > table > tbody > tr:nth-child(${i + 1}) > td:nth-child(2) > img`).src = "./src/img/orages.png"
        }
        else {
            document.querySelector(`body > main > table > tbody > tr:nth-child(${i + 1}) > td:nth-child(2) > img`).src = "./src/img/heavy_rain.png"
        }
    }



    fetchsunrise();



}


function displayDate() {
    today = new Date();
    let cseconds;
    let cminutes;
    let chours;

    today.getSeconds() < 10 ? cseconds = ":0" : cseconds = ":";
    today.getMinutes() < 10 ? cminutes = ":0" : cminutes = ":";
    today.getHours() < 10 ? chours = "0" : chours = "";

    stoday.innerHTML = new Date().toLocaleDateString();
    stime.innerHTML = chours + today.getHours() + cminutes + today.getMinutes() + cseconds + today.getSeconds();

}


async function fetchSaintsData() {

    let span = document.querySelector("body > main > section.ephemeride > p:nth-child(5) > span");

    await fetch("https://nominis.cef.fr/json/nominis.php")
        .then((res) => res.json())
        .then((data) => saintsData = data.response.prenoms.majeur)

    span.innerHTML = Object.keys(saintsData).map(
        (saint) => saint
    )
        .join(", ");



}

const displayPrevisions = () => {

    let days = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
    const prevtoday = document.querySelector("body > main > table > tbody > tr:nth-child(1) > td:nth-child(1)");
    const prevtomorrow = document.querySelector("body > main > table > tbody > tr:nth-child(2) > td:nth-child(1)");
    const prevafter = document.querySelector("body > main > table > tbody > tr:nth-child(3) > td:nth-child(1)");

    prevtoday.innerHTML = days[today.getDay()];
    prevtomorrow.innerHTML = days[today.getDay() + 1];
    today.getDay() + 2 >= 7 ? prevafter.innerHTML = days[0] : prevafter.innerHTML = days[today.getDay() + 2];

}

function meteoInsee() {
    const inputtxt = document.querySelector("#insee");
    const inputsbt = document.querySelector("body > header > form > input[type=submit]:nth-child(3)");

    inputsbt.addEventListener("click", function (e) {
        let insee = inputtxt.value;
        e.preventDefault();

        fetchsunrise(insee);
        fetchMeteoData(insee);

    })
}

meteoInsee();

fetchMeteoData();
displayPrevisions();
fetchSaintsData();



setInterval(displayDate, 1000);