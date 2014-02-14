var apiURL = "https://api.github.com/repos/Phrzsr/phrzsr/contents/motivational?callback=grab"

var pArray = []

function phrzsr(cat) {
	var script = document.createElement('script');
	// need: use cat to select category
	script.src = apiURL;
	document.getElementsByTagName('head')[0].appendChild(script);
}

function grab(response) {
    var b64 = response.data.content.replace(/\n|\r/g, "");
    // issue: sometimes it screws up hyphens, sometimes it adds extra quotes
    var dec = window.atob(b64);
	// issue: returns a blank array element at the very end
    pArray = dec.split("\n");
    console.log(pArray);
	console.log(getRandomPhrase(pArray));
	// need: write to document
}

function getRandomPhrase(phraseArray){
	return phraseArray[Math.floor(Math.random() * phraseArray.length)];
}

phrzsr();