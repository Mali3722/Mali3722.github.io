let weatherRequest = new XMLHttpRequest();
let apiURLstring = 'https://api.openweathermap.org/data/2.5/weather?lat=37.677341&lon=-113.061737&units=imperial&APPID=e2b7cdf510dc1ed38f09a77e6684cf29';
weatherRequest.open('Get', apiURLstring, true);
weatherRequest.send();

weatherRequest.onload = function () {
    let weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);

    var t = weatherData.main.temp;
    var s = weatherData.wind.speed;

    var e = Math.pow(s, 0.16);
    var f = 35.74 + 0.6215 * t - 35.75 * e + 0.4275 * t * e;
    f = Math.round(f);
    document.getElementById("result").innerHTML = f;

    
    document.getElementById('high').innerHTML = weatherData.main.temp_max;
    document.getElementById('humidity').innerHTML = weatherData.main.humidity;
    document.getElementById('speed').innerHTML = weatherData.wind.speed;
    let icon = "http://openweathermap.org/img/wn/" + weatherData.weather[0].icon + ".png"

    let description = weatherData.weather[0].description;

    
    document.getElementById('cccurrent').innerHTML = description;
}