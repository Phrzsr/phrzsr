

function phrzsr() {
	httpGet("https://raw.github.com/Phrzsr/phrzsr/master/motivational", function(response){
		document.write("callback test");
		phraseArray = [];
		phraseArray = response.split("\n");
		console.log(response);

		
		document.write(getRandomPhrase(phraseArray));
	});
};

function httpGet(url, callback) {
	document.write("httpGet test");
	var httpRequest; // create our XMLHttpRequest object
	if (window.XMLHttpRequest) {
		httpRequest = new XMLHttpRequest();
	} else if (window.ActiveXObject) {
		// Internet Explorer is stupid
		httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
 	}

	httpRequest.onreadystatechange = function() {
		// inline function to check the status
		// of our request
		// this is called on every state change
		if (httpRequest.readyState == 4 &&
				httpRequest.status == 200) {
			callback.call(httpRequest.responseText);
			// call the callback function
		}
	};
	httpRequest.open('GET', url);
	httpRequest.send();
};

function getRandomPhrase(phraseArray){
	phraseLimit  = phraseArray.length - 1;
	phraseRand 	 = Math.random()*phraseLimit;
	phraseNumber = Math.round(phraseRand);
	chosenPhrase = phraseArray[phraseNumber];
}