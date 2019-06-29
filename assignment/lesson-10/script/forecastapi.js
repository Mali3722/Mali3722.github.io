let weatherRequest = new XMLHttpRequest();
let apiURLstring = 'https://api.openweathermap.org/data/2.5/forecast/hourly?id=5604473&units=imperial&APPID=e2b7cdf510dc1ed38f09a77e6684cf29';
weatherRequest.open('Get', apiURLstring, true);
weatherRequest.send();

weatherRequest.onload = function () {
    let weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);

    
    
    let icon = "http://openweathermap.org/img/wn/" + weatherData.weather[0].icon + ".png"

    let description = weatherData.weather[0].description;

    document.getElementById('cc-img').setAttribute('src', icon);
    document.getElementById('current').setAttribute('alt', description);
}