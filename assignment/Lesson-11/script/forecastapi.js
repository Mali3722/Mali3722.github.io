let weatherObject = new XMLHttpRequest();
let apiURLstring2 = 'https://api.openweathermap.org/data/2.5/forecast/?id=5604473&units=imperial&APPID=e2b7cdf510dc1ed38f09a77e6684cf29';
weatherObject.open('Get', apiURLstring2, true);
weatherObject.send();

weatherObject.onload = function () {
    let weatherInfo = JSON.parse(weatherObject.responseText);
    console.log(weatherInfo);

    var forecast = 1;
    for (i = 0; i < weatherInfo.list.length; i++) {
        if (weatherInfo.list[i].dt_txt.includes('18:00:00')) {
            if (forecast <= 5) {


                var day = "day" + forecast;
                var icon = "icon" + forecast;

                document.getElementById(day).innerHTML = weatherInfo.list[i].main.temp_max;
                document.getElementById(icon).setAttribute("src","http://openweathermap.org/img/wn/" + weatherInfo.list[i].weather[0].icon + ".png");

                forecast++;
            }
        }
    }
}