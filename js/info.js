//========================================================================================================
const apiKey = 'ceaf0b99fa7a8067ddcbc52696137c55';

let lat = localStorage.getItem('lat');
let lon = localStorage.getItem('lon');

let nameCountries = findElement('.city-name');
let iconsWeather = findElement('.icon');
let degsCountry = findElement('.city-deg');
let tempsCountry = findElement('.city-temp');

function getData(evt) {
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
    )
        .then((res) => res.json())
        .then((data) => {
            renderData(data)
        })
        .catch((err) => console.log(err));
}

function renderData(data) {
    let nameCountry = data.name;
    // let iconWeather = data.weather.icon;
    let iconWeather = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    let degCountry = Math.round(data.main.temp - 273) + '°C';
    let speedCountry = data.wind.speed + ' ' + 'm/s';

    iconsWeather.src = iconWeather;
    degsCountry.innerHTML = degCountry;
    tempsCountry.innerHTML = speedCountry;
    nameCountries.innerHTML = nameCountry;
}

getData()
//==========================================================================================================




//==========================================================================================================
let button = findElement('.weather__btn');

function weatherOfCity(evt) {
    location.pathname = '/index.html';
}


button.addEventListener('click', weatherOfCity)