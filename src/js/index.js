let sunrise;
let meteoData = [];
let saintsData = [];
let today = new Date();


const stime = document.querySelector("body > main > section.ephemeride > p:nth-child(3) > span");
const stoday = document.querySelector("body > main > section.ephemeride > p:nth-child(2) > span");
const psunrise = document.querySelector("body > main > section.ephemeride > p:nth-child(4) > span");
const ptempmax = document.querySelector("body > main > section.temp > div > figure:nth-child(2) > p");
const ptempmin = document.querySelector("body > main > section.temp > div > figure:nth-child(1) > p");
const ptempav = document.querySelector("body > main > section.temp > div > figure:nth-child(3) > p");

async function fetchsunrise() {
    await fetch("https://api.meteo-concept.com/api/ephemeride/0?token=6420e2b831dad423bc7ba0412ce1a74f8f094153f4b2ea617612d0c72b7e8ead&insee=31555").then((res) => res.json())
        .then((data) => sunrise = data.ephemeride.sunrise)

    psunrise.innerHTML = sunrise;

}

async function fetchMeteoData() {
    await fetch("https://api.meteo-concept.com/api/forecast/daily?token=6420e2b831dad423bc7ba0412ce1a74f8f094153f4b2ea617612d0c72b7e8ead&insee=31555").then((res) => res.json())
        .then((data) => meteoData = data.forecast)

    ptempmax.innerHTML = meteoData[0].tmax;
    ptempmin.innerHTML = meteoData[0].tmin;
    ptempav.innerHTML = Math.round((meteoData[0].tmax + meteoData[0].tmin) / 2);



    fetchsunrise();



}


function displayDate() {
    today = new Date();
    let cseconds;
    let cminutes;
    let chours;

    today.getSeconds() < 10 ? cseconds = ":0" : cseconds = ":";
    today.getMinutes() < 10 ? cminutes = ":0" : cminutes = ":";
    today.getHours() < 10 ? chours = ":0" : chours = "";

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
        .join(",");


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



fetchMeteoData();
displayPrevisions();
fetchSaintsData();



setInterval(displayDate, 1000);