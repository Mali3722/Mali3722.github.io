var section = document.querySelector('section');
var requestURL = "https://github.com/Mali3722/Mali3722.github.io/blob/master/assignment/lesson-14/script/temple.json";
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function () {
    var templeData = request.response;
    showData(templeData);
}
function showData(jsonObj) {
    var temples = jsonObj['temples'];
    var output = [];
    for (var i = 0; i < temples.length; i++) {
        if (temples[i].name == document.getElementById("temple").innerHTML) {

            var myList = document.createElement('ul');


            var events = temples[i].schedule;
            for (var j = 0; j < schedule.length; j++) {
                var listItem = document.createElement('li');
                listItem.textContent = schedule[j];
                
                myList.appendChild(listItem);
            }
            document.getElementById("schedule").appendChild(myList);
        }
    }
}
        