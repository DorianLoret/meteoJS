let sunData = [];
let saintsData = [];

async function fetchsunData() {
 await fetch("https://api.meteo-concept.com/api/ephemeride/0?token=6420e2b831dad423bc7ba0412ce1a74f8f094153f4b2ea617612d0c72b7e8ead&insee=31555").then((res) => res.json())
    .then((data) => sunData = data)
}

async function fetchsaintsData() {
 await fetch("https://nominis.cef.fr/json/nominis.php")
    .then((res) => res.json())
    .then((data) => console.log(data))
}

fetchsaintsData();