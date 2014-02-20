// need: auto-complete so any argument that starts with m = motivational, etc.
var URLs = {
	// motivational, demotivational, farewell, gratitude, greeting
	mot: "https://api.github.com/repos/Phrzsr/phrzsr/contents/motivational?callback=grab",
	dem: "https://api.github.com/repos/Phrzsr/phrzsr/contents/demotivational?callback=grab",
	far: "https://api.github.com/repos/Phrzsr/phrzsr/contents/farewell?callback=grab",
	gra: "https://api.github.com/repos/Phrzsr/phrzsr/contents/gratitude?callback=grab",
	gre: "https://api.github.com/repos/Phrzsr/phrzsr/contents/greeting?callback=grab"
}

var pArray = []

function phrzsr(userCat) {
	var script = document.createElement('script');
	if (!userCat) {
		url = URLs['mot'];
	} else {
		url = selectURL(userCat);
	}
	script.src = url;
	document.getElementsByTagName('head')[0].appendChild(script);
}

function selectURL(category) {
	var shortURL = category.slice(0, 3).toLowerCase();
	try {
		url = URLs[shortURL];
		return url;
	} catch (e) {
		console.log("Phrzsr: please enter a valid category");
	}
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