var message= '';
var returnedQuotes = [];

//Created array with objects and properties inside

var quotes = [

    { quote: "We never thought we'd get this far, but we're here.",
      source: 'Selena Quintanilla',
      year: '1993',
      citation:''},

    { quote:'Limit you "always" and your "nevers".' ,
      source: 'Amy Poehler',
      year:'',
      citation:''},

    { quote: "I don't care that they stole my idea...I care that they don't have any of their own.",
      source: 'Nikola Tesla',
      year:'',
      citation:''},

    { quote: 'My mission in life is not merely to survive, but to thrive',
      source: 'Maya Angelou',
      year:'',
      citation:'' },

    { quote: 'Every blessing ignored becomes a curse',
      source:'Paulo Coelho',
      year:'1988',
      citation:'The Alchemist'}

];

//created function for getRandomQuote

function getRandomQuote () {
    var randomQuote = Math.floor(Math.random() * quotes.length);
    var splicedQuotes = quotes.splice(randomQuote, 1) [0];
returnedQuotes.push(splicedQuotes);
	if ( quotes.length === 0 ) {
		quotes = returnedQuotes;
		returnedQuotes = []; }
	return splicedQuotes;
}
   
// created printQuote function

function printQuote(message) {
    var quote = getRandomQuote();
    var message= 
    "<p class ='quote'>" + quote.quote + "</p>" +
    "<p class='source'>" + quote.source + 
    "<span class='year'>" + quote.year + "</span>" + 
    "<span class='citation'>" + quote.citation + "</span></p>";

document.getElementById('quote-box').innerHTML= message;

}

//for button to get another quote
document.getElementById('loadQuote').addEventListener("click", printQuote, false);