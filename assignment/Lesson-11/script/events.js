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
