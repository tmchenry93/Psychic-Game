var loss = 1;
var yay = 1;
var gl = 9;

	function random_character() {
	    var chars = "abcdefghijklmnopqurstuvwxyz";
	    return chars.substr( Math.floor(Math.random() * 26), 1);
	}

	var R = random_character();

document.onkeyup = function(event) {

		if (event.key == R) {
			document.getElementById("win").innerHTML = yay++;
		}

		if (gl === 0) {
			document.getElementById("loss").innerHTML = loss++;
			gl +=9;
		}
	
		if (event.key !== R) {
			document.getElementById("guessl").innerHTML = gl--;
		}

		if (event.key !== R) {
			document.getElementById("letters").innerHTML = event.key;
		}
};

	



