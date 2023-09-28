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

