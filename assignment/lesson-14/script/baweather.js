let weatherRequest = new XMLHttpRequest();
let apiURLstring = 'https://api.openweathermap.org/data/2.5/weather?lat=10.961040&lon=-74.800960&units=imperial&APPID=e2b7cdf510dc1ed38f09a77e6684cf29';
weatherRequest.open('Get', apiURLstring, true);
weatherRequest.send();

weatherRequest.onload = function () {
    let weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);

       
    document.getElementById('bacurrent').innerHTML = weatherData.main.temp;
}