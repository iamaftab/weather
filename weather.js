const query = document.querySelector('#query');
const searchBtn = document.querySelector('#searchBtn');
const locationTitle = document.querySelector('#locationTitle');
const weatherCondition = document.querySelector('#weatherCondition');
const weatherIcon = document.querySelector('#weatherIcon');
const temp = document.querySelector('#temp');
const humidity = document.querySelector('#humidity');
const wind = document.querySelector('#wind');

const APIKEY = 'Add your api';

const urlCityName =`https://api.openweathermap.org/data/2.5/weather?q=${query.value}&appid=${APIKEY}&units=metric`;


searchBtn.addEventListener('click', () => {
    const zipCode = query.value;
    const urlZipCode = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},in&appid=${APIKEY}&units=metric`;

    fetch(urlZipCode)
        .then(res => res.json())
        .then(data => {
            //console.log(data);
            locationTitle.innerHTML = data.name;
            weatherIcon.setAttribute('src', `https://openweathermap.org/img/w/${data.weather[0].icon}.png`);
            temp.innerHTML = `${data.main.temp} <sup>o</sup>C`;
            wind.innerHTML = `Wind: ${data.wind.speed} Km/h`; 
            humidity.innerHTML = `Humidity: ${data.main.humidity} %`;
            weatherCondition.innerHTML = `Weather Condition: ${data.weather[0].description} `;
        }).catch(error => {
            query.innerHTML = query.value + '- is not found !';
            //console.log(error);
        });
});
