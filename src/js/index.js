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

function prevText(weather) {
    let weatherTxt;

    switch (weather) {
        case 0:
            weatherTxt = "Soleil";
            break;

        case 1:
            weatherTxt = "Peu nuageux";
            break;

        case 2:
            weatherTxt = "Ciel voilé";
            break;

        case 3:
            weatherTxt = "Nuageux";
            break;

        case 4:
            weatherTxt = "Très Nuageux";
            break;

        case 5:
            weatherTxt = "Couvert";
            break;

        case 6:
            weatherTxt = "Brouillard";
            break;

        case 7:
            weatherTxt = "Brouillard givrant";
            break;

        case 10:
            weatherTxt = "Pluie faible";
            break;

        case 11:
            weatherTxt = "Pluie modérée";
            break;

        case 12:
            weatherTxt = "Pluie forte";
            break;

        case 13:
            weatherTxt = "Pluie faible verglaçante";
            break;

        case 14:
            weatherTxt = "Pluie modérée verglaçante";
            break;

        case 15:
            weatherTxt = "Pluie forte verglaçante";
            break;

        case 16:
            weatherTxt = "Bruine";
            break;

        case 20:
            weatherTxt = "Neige faible";
            break;

        case 21:
            weatherTxt = "Neige modérée";
            break;

        case 22:
            weatherTxt = "Neige forte";
            break;

        case 30:
            weatherTxt = "Pluie et neige mêlées faibles";
            break;

        case 31:
            weatherTxt = "Pluie et neige mêlées modérées";
            break;

        case 32:
            weatherTxt = "Pluie et neige mêlées fortes";
            break;


        case 40:
            weatherTxt = "Averses de pluie locales et faibles";
            break;


        case 41:
            weatherTxt = "Averses de pluie locales";
            break;


        case 42:
            weatherTxt = "Averses locales et fortes";
            break;


        case 43:
            weatherTxt = "Averses de pluie faibles";
            break;


        case 44:
            weatherTxt = "Averses de pluie";
            break;


        case 45:
            weatherTxt = "Averses de pluie fortes";
            break;


        case 46:
            weatherTxt = "Averses de pluie faibles et fréquentes";
            break;


        case 47:
            weatherTxt = "Averses de pluie fréquentes";
            break;


        case 48:
            weatherTxt = "Averses de pluie fortes et fréquentes";
            break;


        case 60:
            weatherTxt = "Averses de neige localisées et faibles";
            break;


        case 61:
            weatherTxt = "Averses de neige localisées";
            break;


        case 62:
            weatherTxt = "Averses de neige localisées et fortes";
            break;


        case 63:
            weatherTxt = "Averses de neige faibles";
            break;


        case 64:
            weatherTxt = "Averses de neige";
            break;


        case 65:
            weatherTxt = "Averses de neige fortes";
            break;


        case 66:
            weatherTxt = "Averses de neige faibles et fréquentes";
            break;


        case 67:
            weatherTxt = "Averses de neige fréquentes";
            break;


        case 68:
            weatherTxt = "Averses de neige fortes et fréquentes";
            break;


        case 70:
            weatherTxt = "Averses de pluie et neige mêlées localisées et faibles";
            break;

        case 71:
            weatherTxt = "Averses de pluie et neige mêlées localisées";
            break;

        case 72:
            weatherTxt = "Averses de pluie et neige mêlées localisées et fortes";
            break;

        case 73:
            weatherTxt = "Averses de pluie et neige mêlées faibles";
            break;

        case 74:
            weatherTxt = "Averses de pluie et neige mêlées";
            break;

        case 75:
            weatherTxt = "Averses de pluie et neige mêlées fortes";
            break;

        case 76:
            weatherTxt = "Averses de pluie et neige mêlées faibles et nombreuses";
            break;

        case 77:
            weatherTxt = "Averses de pluie et neige mêlées fréquentes";
            break;

        case 78:
            weatherTxt = "Averses de pluie et neige mêlées fortes et fréquentes";
            break;

        case 100:
            weatherTxt = "Orages faibles et locaux";
            break;

        case 101:
            weatherTxt = "Orages locaux";
            break;

        case 102:
            weatherTxt = "Orages forts et locaux";
            break;

        case 103:
            weatherTxt = "Orages faibles";
            break;

        case 104:
            weatherTxt = "Orages";
            break;

        case 105:
            weatherTxt = "Orages forts";
            break;

        case 106:
            weatherTxt = "Orages faibles et fréquents";
            break;

        case 107:
            weatherTxt = "Orages fréquents";
            break;

        case 108:
            weatherTxt = "Orages forts et fréquents";
            break;

        case 120:
            weatherTxt = "Orages faibles et locaux de neige ou grésil";
            break;

        case 121:
            weatherTxt = "Orages locaux de neige ou grésil";
            break;

        case 122:
            weatherTxt = "Orages locaux de neige ou grésil";
            break;

        case 123:
            weatherTxt = "Orages faibles de neige ou grésil";
            break;

        case 124:
            weatherTxt = "Orages de neige ou grésil";
            break;

        case 125:
            weatherTxt = "Orages de neige ou grésil";
            break;

        case 126:
            weatherTxt = "Orages faibles et fréquents de neige ou grésil";
            break;

        case 127:
            weatherTxt = "Orages fréquents de neige ou grésil";
            break;

        case 128:
            weatherTxt = "Orages fréquents de neige ou grésil";
            break;

        case 130:
            weatherTxt = "Orages faibles et locaux de pluie et neige mêlées ou grésil";
            break;

        case 131:
            weatherTxt = "Orages locaux de pluie et neige mêlées ou grésil";
            break;

        case 132:
            weatherTxt = "Orages fort et locaux de pluie et neige mêlées ou grésil";
            break;

        case 133:
            weatherTxt = "Orages faibles de pluie et neige mêlées ou grésil";
            break;

        case 134:
            weatherTxt = "Orages de pluie et neige mêlées ou grésil";
            break;

        case 135:
            weatherTxt = "Orages forts de pluie et neige mêlées ou grésil";
            break;

        case 136:
            weatherTxt = "Orages faibles et fréquents de pluie et neige mêlées ou grésil";
            break;

        case 137:
            weatherTxt = "Orages fréquents de pluie et neige mêlées ou grésil";
            break;

        case 138:
            weatherTxt = "Orages forts et fréquents de pluie et neige mêlées ou grésil";
            break;

        case 140:
            weatherTxt = "Pluies orageuses";
            break;

        case 141:
            weatherTxt = "Pluie et neige mêlées à caractère orageux";
            break;

        case 142:
            weatherTxt = "Neige à caractère orageux";
            break;

        case 210:
            weatherTxt = "Pluie faible intermittente";
            break;

        case 211:
            weatherTxt = "Pluie modérée intermittente";
            break;

        case 212:
            weatherTxt = "Pluie forte intermittente";
            break;

        case 220:
            weatherTxt = "Neige faible intermittente";
            break;

        case 221:
            weatherTxt = "Neige modérée intermittente";
            break;

        case 222:
            weatherTxt = "Neige forte intermittente";
            break;

        case 230:

        case 231:

        case 232:
            weatherTxt = "Pluie et neige mêlées";
            break;

        case 235:
            weatherTxt = "Averses de grêle";
            break;

        default:
            weatherTxt = "Erreur dans les prévisions";
            break;
    }

    return weatherTxt;
}

async function fetchMeteoData() {
    await fetch("https://api.meteo-concept.com/api/forecast/daily?token=6420e2b831dad423bc7ba0412ce1a74f8f094153f4b2ea617612d0c72b7e8ead&insee=31555").then((res) => res.json())
        .then((data) => meteoData = data.forecast)

    ptempmax.innerHTML = meteoData[0].tmax;
    ptempmin.innerHTML = meteoData[0].tmin;
    ptempav.innerHTML = Math.round((meteoData[0].tmax + meteoData[0].tmin) / 2);

    console.log(meteoData[0].weather);

    for (let i = 0; i < 3; i++) {
        document.querySelector(`body > main > table > tbody > tr:nth-child(${i + 1}) > td:nth-child(3)`).innerHTML = prevText(meteoData[i].weather);
    }


    for (let i = 0; i < 3; i++) {

        if (meteoData[i].weather == 0) {

            document.querySelector(`body > main > table > tbody > tr:nth-child(${i + 1}) > td:nth-child(2) > img`).src = "./src/img/ensoleille.png";
        }
        else if (meteoData[i].weather == 1) {
            document.querySelector(`body > main > table > tbody > tr:nth-child(${i + 1}) > td:nth-child(2) > img`).src = "./src/img/eclaircies.png";
        }
        else if (meteoData[i].weather > 1 && meteoData[i].weather <= 7) {
            document.querySelector(`body > main > table > tbody > tr:nth-child(${i + 1}) > td:nth-child(2) > img`).src = "./src/img/partly_cloudy_day_sun_clouds_weather_icon_177560.png"
        }
        else if (meteoData[i].weather > 7 && meteoData[i].weather <= 78) {
            document.querySelector(`body > main > table > tbody > tr:nth-child(${i + 1}) > td:nth-child(2) > img`).src = "./src/img/heavy_rain.png"
        }
        else if (meteoData[i].weather > 100 && meteoData[i].weather <= 142) {
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