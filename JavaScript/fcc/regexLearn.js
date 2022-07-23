//find any char inside regex i /[xxxxx]/ x = char to find
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; // Change this line
let result = quoteSample.match(vowelRegex); // Change this line

//match any char using -
let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi; // Change this line
let result = quoteSample.match(alphabetRegex); // Change this line

//match char and number in between 
let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/gi; // Change this line
let result = quoteSample.match(myRegex); // Change this line

//match not a number and not a vowel using ^
let quoteSample = "3 blind mice.";
let myRegex = /[^aeio0-9]/gi; // Change this line
let result = quoteSample.match(myRegex); // Change this line

//match 1 or more character i text
let difficultSpelling = "Mississippi";
let myRegex = /s+/gi; // Change this line
let result = difficultSpelling.match(myRegex);  

//match A followed by 'a' for 0 or many char. initial chewieQuote is Aaaaaaaargh
// Only change code below this line
let chewieRegex = /Aa*/; // Change this line
// Only change code above this line

let result = chewieQuote.match(chewieRegex);

//match <h1> remember wildcard is . 
let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/; // Change this line
let result = text.match(myRegex);

//find any string that has C or C...
let reCriminals = /C+/; 

//^ outside [] mean we will find character at the first stage of string
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // Change this line
let result = calRegex.test(rickyAndCal);

//shorthand character class = \w = 
//let longHand = /[A-Za-z0-9_]+/;
//let shortHand = /\w+/;
let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/gi; // Change this line
let result = quoteSample.match(alphabetRegexV2).length;

//^ = using capital W
let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/; // Change this line
let result = quoteSample.match(nonAlphabetRegex).length;

// \d = [0-9]
let movieName = "2001: A Space Odyssey";
let numRegex = /\d/gi; // Change this line
let result = movieName.match(numRegex).length;

// \D = [^0-9]
let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/; // Change this line
let result = movieName.match(noNumRegex).length;

