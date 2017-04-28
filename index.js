var fs = require("fs");
var json = JSON.parse(fs.readFileSync("corpus.json", "utf-8"));

var lengths = {
	nouns: json.nouns.length,
	verbs: json.verbs.length,
	adverbs: json.adverbs.length,
	prepositions: json.prepositions.length
}


var noun_a = get_random("nouns");
var verb = get_random("verbs");
var adverb = get_random("adverbs");
var preposition = get_random("prepositions");
var noun_b = get_random("nouns");

var indefinite_article;
if (noun_b[0].toLowerCase() == "a" || noun_b[0].toLowerCase() == "e" || noun_b[0].toLowerCase() == "i" || noun_b[0].toLowerCase() == "o" || noun_b[0].toLowerCase() == "u") {
	indefinite_article = "an";
} else {
	indefinite_article = "a";
}

var possessive_pronouns = ["My", "Your", "His", "Her", "Its", "Our", "Your", "Their"];

var article = [indefinite_article, "the"][rand_between(0, 1)];

var sentence = [possessive_pronouns[rand_between(0, possessive_pronouns.length - 1)], noun_a, verb, adverb, preposition, article, noun_b].join(" ") + ".";

console.log(sentence);

function rand_between(start, end){
	return Math.floor(Math.random() * end) + start;
}

function get_random(pos){

	var a = json[pos][rand_between(0, lengths[pos] - 1)];
	return pos == "verbs" ? a.past : a;
}