//test for getting element data from HTML tag
function getcontent() {
  var txt = document.getElementById("line").innerHTML;
  alert(txt);
}

//transition for About Section
// var i = 0;
// var body = document.getElementById("line").innerHTML;
// var text = document.getElementById("line");
// document.getElementById("line").innerHTML = "";
// function typeWriter() {
//   if (i < body.length) {
//     text.innerHTML += body.charAt(i);
//     i++;
//     setTimeout(typeWriter, 20);
//   }
// }

//transition for title/position
// var j=0;
// var title = document.getElementById("title").innerHTML;
// var whtml = document.getElementById("title");
// document.getElementById("title").innerHTML = "";
// function position() {
//   if (j < title.length) {
//     whtml.innerHTML += title.charAt(j);
//     j++;
//     setTimeout(position, 100);
//   }
// }

//transition for name
// var k=0;
// var name = document.getElementById("name").innerHTML;
// var namewhtml = document.getElementById("name");
// document.getElementById("name").innerHTML = "";
// function nameTag() {
//   if (k < name.length) {
//     namewhtml.innerHTML += name.charAt(k);
//     k++;
//     setTimeout(nameTag, 100);
//   }
// }

function TagTypeWriter(index, tagText, tagID, emptyTag, writerSpeed) {
  var body = tagText;
  var text = tagID;
  emptyTag.innerHTML = "";
  var paragraph = emptyTag;
  paragraph.style = "display:block";
  function typeWriter() {
    if (index < body.length) {
      text.innerHTML += body.charAt(index);
      index++;
      setTimeout(typeWriter, writerSpeed);
    }
    // else{
    //   index=0;
    //   setTimeout(function(){
    //     emptyTag.innerHTML="";
    //     typeWriter();
    //   },writerSpeed);
    // }
  }
  typeWriter();
}
//About

// var i = 0;
// var aboutBodyText = document.getElementById("line").innerHTML;
// var aboutTagText = document.getElementById("line");
// var aboutEmpty = document.getElementById("line");

//Position/ Title
//caharcter count - 17
var j = 0;
var titleBodyText = document.getElementById("title").innerHTML;
var titleTagText = document.getElementById("title");
var titleEmpty = document.getElementById("title");

//Name
//character count - 11
var k = 0;
var nameBodyText = document.getElementById("name").innerHTML;
var nameTagText = document.getElementById("name");
var nameEmpty = document.getElementById("name");
window.onload = function () {
  //TagTypeWriter(i, aboutBodyText, aboutTagText, aboutEmpty, 20);
  TagTypeWriter(j, titleBodyText, titleTagText, titleEmpty, 99);
  TagTypeWriter(k, nameBodyText, nameTagText, nameEmpty, 175);
}