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
        if (temples[i].name == "Barranquilla" || temples[i].name == "FortLauderdale" || temples[i].name == "CedarCity" || temples[i].name == "Trujillo") {
            output.push(temples[i]);

            var myArticle = document.createElement('article');
            myArticle.className = "templeData";
           /* var myH2 = document.createElement('h2');
            var myPara1 = document.createElement('p');
            var myPara2 = document.createElement('p');
            var myPara3 = document.createElement('p');
            var myPara4 = document.createElement('p');*/
            var myList = document.createElement('ul');

            myH2.textContent = temples[i].name;
            myPara1.textContent = 'Motto: ' + temples[i].motto;
            myPara2.textContent = 'Year Founded: ' + temples[i].yearFounded;
            myPara3.textContent = 'Current Population: ' + temples[i].currentPopulation;
            myPara4.textContent = 'Average Rainfall: ' + temples[i].averageRainfall;


            myArticle.appendChild(myH2);
            myArticle.appendChild(myPara1);
            myArticle.appendChild(myPara2);
            myArticle.appendChild(myPara3);
            myArticle.appendChild(myPara4);

            var tn = document.getElementById(temples[i].name)

            tn.appendChild(myArticle);

        }
    }
}
            var myList = document.createElement('ul');
            /*myH2.textContent = 'Schedule: ';*/
            /*myPara5.textContent = 'Schedule ' + temples[i].events;*/
            myArticle.appendChild(myPara5); 

            var schedule = temples[i].events;
            for (var j = "0"; j < temples.length; j++) {
            var listItem = document.createElement('li');
            listItem.textContent = schedule[j];
            var myList =document.getElementById(temples[i].events)
            myList.appendChild(listItem);
}
