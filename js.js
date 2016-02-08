$(document).ready(function(){
		showText("#myname", " Robbie Keller", 0, 160);
		typing.play();
	});

var showText = function(target, message, index, interval) {
	if (index < message.length) {
		$(target).append(message[index++]);
		setTimeout(function() { showText(target, message, index, interval);}, interval);
	}
}

var typing = new Audio('keyboard typing slow1.mp3');

	// $.get("index.html", myCallBack);