// need: auto-complete so any argument that starts with m = motivational, etc.
var URLs = {
	motivational: "https://api.github.com/repos/Phrzsr/phrzsr/contents/motivational?callback=grab",
	demotivational: "https://api.github.com/repos/Phrzsr/phrzsr/contents/demotivational?callback=grab",
	farewell: "https://api.github.com/repos/Phrzsr/phrzsr/contents/farewell?callback=grab",
	gratitude: "https://api.github.com/repos/Phrzsr/phrzsr/contents/gratitude?callback=grab",
	greeting: "https://api.github.com/repos/Phrzsr/phrzsr/contents/greeting?callback=grab"
}

var pArray = []

function phrzsr(cat) {
	var script = document.createElement('script');
	if (!cat) {
		url = URLs['motivational'];
	} else {
		category = cat.toLowerCase();
		if (category in URLs) {
		url = URLs[category];
		} else {
			console.log('Please enter a valid category in the phrzsr function');
		}
	}
	script.src = url;
	document.getElementsByTagName('head')[0].appendChild(script);
}

function grab(response) {
    var b64 = response.data.content.replace(/\n|\r/g, "");
    // issue: sometimes it screws up hyphens, sometimes it adds extra quotes
    var dec = window.atob(b64);
	// issue: returns a blank array element at the very end
    pArray = dec.split("\n");
	console.log(getRandomPhrase(pArray));
	// need: write to document
}

function getRandomPhrase(phraseArray){
	return phraseArray[Math.floor(Math.random() * phraseArray.length)];
}

phrzsr();