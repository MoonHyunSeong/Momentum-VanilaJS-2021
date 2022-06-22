function onGeoOk(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const API_KEY = "bbd19049276c2b025fe1752961c2d158";
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const weather = document.querySelector(".top_bar #info span");
        const city = document.querySelector(".top_bar #location span");
        city.innerText = data.name;
        weather.innerText = `${data.main.temp}℃ ${data.weather[0].main}`;
    });
}
function onGeoError(){
    alert("can't find you. No Weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);