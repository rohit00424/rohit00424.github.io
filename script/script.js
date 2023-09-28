function getcontent() {
  var txt = document.getElementById("line").innerHTML;
  alert(txt);
}
var i = 0;
var body = document.getElementById("line").innerHTML;
var text = document.getElementById("line");
document.getElementById("line").innerHTML = "";
function typeWriter() {
  if (i < body.length) {
    text.innerHTML += body.charAt(i);
    i++;
    setTimeout(typeWriter, 20);
  }
}
/* var j=0;
var title = document.getElementById("title").innerHTML;
var whtml = document.getElementById("title");
document.getElementById("title").innerHTML = "";
function position() {
  if (j < title.length) {
    whtml.innerHTML += title.charAt(i);
    i++;
    setTimeout(position, 20);
  }
}
*/
