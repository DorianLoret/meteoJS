let sunrise;
let meteoData = [];
let saintsData = [];
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

    console.log(meteoData);



}



async function fetchSaintsData() {
    await fetch("https://nominis.cef.fr/json/nominis.php")
        .then((res) => res.json())
        .then((data) => saintsData = data)
}


fetchMeteoData();
