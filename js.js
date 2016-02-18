$(document).ready(function typeName(){
		showText("#myname", " Robbie Keller", 0, 160);
		typing.play();
	});

/*$(document).ready(function myMove(){
	});*/

var showText = function(target, message, index, interval) {
	if (index < message.length) {
		$(target).append(message[index++]);
		setTimeout(function() { showText(target, message, index, interval);}, interval);
	}
}

function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      document.getElementById("demo").innerHTML = xhttp.responseText;
    }
  };
  xhttp.open("GET", "ajax_info.txt", true);
  xhttp.send();
}

function changeText(){
	document.getElementById("about").innerHTML = "Tuoba";
}

/*function clicked(){
	document.getElementById("about").onclick = ;
}*/

function myMove(){
	var elem = document.getElementById("movingBlock");
	var pos = 255;
	var id = setInterval(frame, 10);
	function frame() {
		if (pos == 1700) {
			clearInterval(id);
		} else {
			pos++;
			elem.style.left = pos +"px";
		}
	}
}

var typing = new Audio('keyboard typing slow1.mp3');
typing.volume = .3;

	// $.get("index.html", myCallBack);