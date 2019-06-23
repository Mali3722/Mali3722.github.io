<script>
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

function townData(jsonObj)
        {
            var location = jsonObj['towns'];
    var townNames = ["Preston", "Soda Springs", "Fish Haven"]
    var output = [];
                for (var i=0; i < location.length; i++) {
                 for (var x=0; x<townNames.lenght; x++){
                   if (location[i]==townNames[x])
                   {
        output.push(i);


    var myArticle = document.createElement('article');
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
        }   
       }
    }


myArticle.appendChild(myH2);
myArticle.appendChild(myPara1);
myArticle.appendChild(myPara2);
myArticle.appendChild(myPara3);
myArticle.appendChild(myPara4);

section.appendChild(myArticle);

}
    </script>