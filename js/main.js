function getQuote(){
var quotes =["“Be yourself; everyone else is already taken.”― Oscar Wilde","Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”― Albert Einstein","“So many books, so little time.”― Frank Zappa","“A room without books is like a body without a soul.”― Marcus Tullius Cicero","“You only live once, but if you do it right, once is enough.”― Mae West","“Be the change that you wish to see in the world.”― Mahatma Gandhi","“We accept the love we think we deserve.”― Stephen Chbosky"];

var res= Math.floor(Math.random(quotes)*quotes.length);
console.log(res);



document.getElementById("popup").innerHTML =`<p>${quotes[res]}</p>`;



}


