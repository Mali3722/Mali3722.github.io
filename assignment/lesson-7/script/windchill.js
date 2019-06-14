var t =parseFloat(docuent.getElementById("high").innerHTML);
var s = parseFloat(document.getElementById("speed").innerHTML);

var result = Math.pow(s, 0.16);
		var f = 35.74 + 0.6215 * t - 35.75 * s + 0.4275 * t * s;
		
document.getElementById("result").innerHTML = result;
