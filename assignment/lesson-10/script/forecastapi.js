let weatherObject = new XMLHttpRequest();
let apiURLstring2 = 'https://api.openweathermap.org/data/2.5/forecast/hourly?id=5604473&units=imperial&APPID=e2b7cdf510dc1ed38f09a77e6684cf29';
weatherObject.open('Get', apiURLstring2, true);
weatherObject.send();

weatherObject.onload = function () {
    let weatherInfo = JSON.parse(weatherRequest.responseText);
    console.log(weatherInfo);

    var forecast = 1;
    for (i = 0; i < weatherInfo; i++) {
        if (weatherInfo.list[i].dt_txt.includes('18:00:00')) {
            if (forcast <= 5) {


                var day = "day" + frocast;



                let icon = "http://openweathermap.org/img/wn/" + weatherInfo.weather[0].icon + ".png"

                let description = weatherInfo.weather[0].description;

                document.getElementById('cc-img').setAttribute('src', icon);
                document.getElementById('current').setAttribute('alt', description);

                forecast++;
            }
        }
    }
}