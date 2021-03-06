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
        if (towns[i].name == "Preston" || towns[i].name == "Soda Springs" || towns[i].name == "Fish Haven") {
            output.push(towns[i]);

            var myArticle = document.createElement('article');
            myArticle.className = "townData";
            var myH2 = document.createElement('h2');
            var myPara1 = document.createElement('p');
            var myPara2 = document.createElement('p');
            var myPara3 = document.createElement('p');
            var myPara4 = document.createElement('p');
            var myList = document.createElement('ul');

            myH2.textContent = towns[i].name;
            myPara1.textContent = 'Motto: ' + towns[i].motto;
            myPara2.textContent = 'Year Founded: ' + towns[i].yearFounded;
            myPara3.textContent = 'Current Population: ' + towns[i].currentPopulation;
            myPara4.textContent = 'Average Rainfall: ' + towns[i].averageRainfall;


            myArticle.appendChild(myH2);
            myArticle.appendChild(myPara1);
            myArticle.appendChild(myPara2);
            myArticle.appendChild(myPara3);
            myArticle.appendChild(myPara4);

            var tn = document.getElementById(towns[i].name)

            tn.appendChild(myArticle);

        }
    }
}
            var myList = document.createElement('ul');
            myH2.textContent = 'Events: ';
            myPara5.textContent = 'Events ' + towns[i].events;
            myArticle.appendChild(myPara5); 

            var events = towns[i].events;
            for (var j = "0"; j < towns.length; j++) {
            var listItem = document.createElement('li');
            listItem.textContent = events[j];
            var myList =document.getElementById(towns[i].events)
            myList.appendChild(listItem);
}
