var x =parseFloat(docuent.getElementById("high").innerHTML);
var y = parseFloat(document.getElementById("speed").innerHTML);

var result = Math.pow(y, 0.16);
		var f = 35.74 + 0.6215 * x - 35.75 * e + 0.4275 * x * e;
		
document.getElementById("result").innerHTML = result;
