var section = document.querySelector('section');
var requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function () {
    var townInfo = request.response;
    townData(townInfo);
}

function showData(jsonObj) {
    var location = jsonObj['towns'];
    var townNames = ["Preston", "Soda Springs", "Fish Haven"]
        if (location[i].name == "Preston" || location[i].name == "Soda Springs" || location[i].name == "Fish Haven") {

                var myArticle = document.createElement('article');
                myArticle.className = "townInfo";
                var myH2 = document.createElement('h2');
                var myPara1 = document.createElement('p');
                var myPara2 = document.createElement('p');
                var myPara3 = document.createElement('p');
                var myPara4 = document.createElement('p');

                myH2.textContent = towns[i].name;
                myPara1.textContent = 'motto: ' + towns[i].motto;
                myPara1.textContent = 'yearFounded: ' + towns[i].yearFounded;
                myPara1.textContent = 'currentPopulation: ' + towns[i].currentPopulation;
                myPara1.textContent = 'averageRainfall: ' + towns[i].averageRainfall;

                myArticle.appendChild(myH2);
                myArticle.appendChild(myPara1);
                myArticle.appendChild(myPara2);
                myArticle.appendChild(myPara3);
                myArticle.appendChild(myPara4);

                var location = document.getElementById(town[i].name);

                section.appendChild(myArticle);

            }
        }
    
