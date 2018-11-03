$(function() {
  
	var words = ['bake', 'banjaxed', 'banter', 'beezer', 'big lad', 'bout ye', 'catch yourself on,', 'cracker', 'craic', 'dander', 'dead on,', 'eejit', 'faffin', 'fegs', 'grand', 'kex', 'melter', 'munter', 'mucker', 'offie', 'oul-doll', 'peelers', 'ratten', 'spuds', 'steamin', 'wee', 'what about ye,', 'wind yer neck in,', 'ats me nai,', 'buck eejit', 'gurn', 'yoke', 'foundered', 'quare stretch in the evenings,', 'whats the craic,', 'yer da sells avon,', 'yer mas your da,', 'swall', 'you know yourself,', 'sucking diesel,', 'boyo', 'chancer', 'culchie', 'gaff', 'keep er lit,'];

	// Return random number
	function getSentenceLength() {
		var min = 3;
		var max = 10;
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	function randomizeArray() {
		words.sort(function() { return 0.5 - Math.random() });
	}

	function generateSentences() {
		var index = 0;
		randomizeArray();
		
		// Add grammar
		for (i = 0; i < words.length; i += sentenceLength) {

			// Add full stops
    	var sentenceLength = getSentenceLength();
    	var index = index + sentenceLength;
    	words.splice(index, 0, ". ");
    	// console.log(sentenceLength);
    	
    	//TODO - Instead of adding new element for full stop just add it to the word. 

		
    	// Add capital letters to first word
    	var firstWord = words[0].toString(); 
    	firstWord = firstWord.charAt(0).toUpperCase() + firstWord.slice(1);
    	words[0] = firstWord;

			// Add capital letters to to rest of sentences
			if (index + 1 < words.length) {
				firstWord = words[index + 1].toString();
				firstWord = firstWord.charAt(0).toUpperCase() + firstWord.slice(1);
				words[index + 1] = firstWord
			}
		}

		// Join contents of array into string
		var sentence = words.join(' ');

		console.log(sentence);
	}

	generateSentences();











});