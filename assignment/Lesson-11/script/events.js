var section = document.querySelector('section');
var requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function () {
    var townData = request.response;
    showData(townData);
}
function showData(jsonObj) {
    var towns = jsonObj['towns'];
    var output = [];
    for (var i = 0; i < towns.length; i++) {
        if (towns[i].name == document.getElementById("town").innerHTML) {

            var myList = document.createElement('ul');


            var events = towns[i].events;
            for (var j = 0; j < events.length; j++) {
                var listItem = document.createElement('li');
                listItem.textContent = events[j];
                
                myList.appendChild(listItem);
            }
            document.getElementById("events").appendChild(myList);
        }
    }
}