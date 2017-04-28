var fs = require("fs");
var json = JSON.parse(fs.readFileSync("corpus.json", "utf-8"));

var lengths = {
	nouns: json.nouns.length,
	verbs: json.verbs.length,
	adverbs: json.adverbs.length,
	prepositions: json.prepositions.length
}

var possessive_pronouns = ["My", "Your", "His", "Her", "Its", "Our", "Your", "Their"];

setInterval(function(){
	make_sentence(get_random("nouns"));	
}, 4000);

function make_sentence(last_word){
	var indefinite_article;
	if (last_word[0].toLowerCase() == "a" || last_word[0].toLowerCase() == "e" || last_word[0].toLowerCase() == "i" || last_word[0].toLowerCase() == "o" || last_word[0].toLowerCase() == "u") {
		indefinite_article = "an";
	} else {
		indefinite_article = "a";
	}
	var article = [indefinite_article, "the"][rand_between(0, 2)];

	console.log([possessive_pronouns[rand_between(0, possessive_pronouns.length - 1)], get_random("nouns"), get_random("verbs"), get_random("adverbs"), get_random("prepositions"), article, last_word].join(" ") + ".");
}






function rand_between(start, end){
	return Math.floor(Math.random() * end) + start;
}

function get_random(pos){

	var a = json[pos][rand_between(0, lengths[pos])];
	return pos == "verbs" ? a.past : a;
}