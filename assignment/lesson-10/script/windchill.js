var t =parseFloat(document.getElementById("high").value);
var s = parseFloat(document.getElementById("speed").value);

var e = Math.pow(s, 0.16);
var f = 35.74 + 0.6215 * t - 35.75 * e + 0.4275 * t * e;
f= Math.round(f);
document.getElementById("result").innerHTML = f;