$(function onLoad(){
		showText("#myname", " test test", 0, 160);
		myMove();
		audio();
});

var showText = function(target, message, index, interval) {
	if (index < message.length) {
		$(target).append(message[index++]);
		setTimeout(function() { showText(target, message, index, interval);}, interval);
	}
}

function myMove(){
	var elem = document.getElementById("movingBlock");
	var pos = 255;
	var id = setInterval(frame, 1);
	var id2 = setInterval(frame2, 1);
	function frame() {
		if (pos == 600) {
			clearInterval(id);
		} else if (pos != 600){
			pos++;
			elem.style.left = pos +"px";
		}
	}
	function frame2() {
		if (pos == 1600) {
			pos--;
			elem.style.left = pos +"px";
		} else {
			frame();
		}
	}
}

function audio() {
	var typing = new Audio('keyboard typing slow1.mp3');
	typing.volume = .2;
	typing.play();
}

function loadDoc3() {
	$.getJSON("data.json", function(data) {
		$.each(data.records, function() {
			$("#projectstable").append("<tr><td>" +this["Name"] +"</td><td>" +this["City"] +"</td><td>" +this["Country"] +"</td></tr><br>");
		});
	});
}

<!-- NEEDS CORRECTION -->
/*function loadDoc() {
  var xmlhttp = new XMLHttpRequest();
  var url = 'hihihihi.txt';

  xmlhttp.onreadystatechange = fill(xmlhttp.responseText);
    if (xhttp.readyState == 4 && xhttp.status == 200)
      fill(xmlhttp.responseText);
    }
  }

  xmlhttp.open("GET", "url", true);
  xmlhttp.send();

function fill(response) {
			window.alert(response);
	/*var obj = JSON.parse(response); /*problem here 

	var arr = obj.records;
		window.alert("fadsfas");
	var i;
	var out = "<table><tr><th>Name</th><th>City</th><th>Country</th></tr>";

	for (i = 0; i < arr.length; i++) {
		out += "<tr><td>" +
		arr[i].Name +
		"</td><td>" +
		arr[i].City +
		"</td><td>" +
		arr[i].Country +
		"</td></tr>";
	}
	out += "</table>"
	document.getElementById("projects").innerHTML = out;
}
}*/

<!-- UNUSED -->
/*function loadDoc2() {
	$("#").load("data.json");
}*/

<!-- UNUSED -->
/*function changeText(){
	document.getElementById("about").innerHTML = "Tuoba";
}*/