// The function answer below receives a color of either HEX format in the form - "#aabbcc" - or RGB format in
// the form - "rgb(r, g, b)" - and converts to the other format

function answer(color){

	let hexToRgb = (startColor) => {
		var startColor = startColor.slice(1);
		var r = parseInt(startColor.substring(0, 2), 16);
		var g = parseInt(startColor.substring(2, 4), 16);
		var b = parseInt(startColor.substring(4, 6), 16);
		return 'rgb(' + r + ',' + g + ',' + b + ')';
	}

	let rgbToHex = (startColor) => {
		function itemToHex(i) {
		    var hex = i.toString(16);
		    return hex.length == 1 ? "0" + hex : hex;
		}
		startColor = startColor.substr(3).slice(1,-1).split(',')
		return "#" + `${itemToHex(Number(startColor[0]))}${itemToHex(Number(startColor[1]))}${itemToHex(Number(startColor[2]))}`;
	}

	if(color[0] === '#'){
		return hexToRgb(color);
	}else {
		return rgbToHex(color);
	}
}