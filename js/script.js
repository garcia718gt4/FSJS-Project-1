/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
let quotes = [
  {
    quote: 'You wanna know how good bacon is? To improve other food, they wrap it in bacon.',
    source:'Jim Gaffigan',
    citation:'',
    tag:'humor'
  },

  {
    quote: 'Whenever you correct someone\'s grammar just remember that nobody likes you.',
    source:'Jim Gaffigan',
    citation:'',
    tag:'humor'
  },

  {
    quote: "There should be a children's song: 'If you're happy and you know it, keep it to yourself and let your dad sleep.",
    source:'Jim Gaffigan',
    citation:'',
    tag:'humor'
  },

  {
    quote: "My wife and I were happy for twenty years. Then we met!",
    source:'Rodney Dangerfield',
    citation:'',
    tag:'humor'
  },

  {
    quote: 'I’m a huge fan of the way you lose control and turn into an enormous green rage monster.',
    source:'Tony Stark',
    citation:'The Avengers',
    year: '2012',
    tag:'humor'
  },

  {
    quote: 'If opportunity doesn’t knock, build a door.',
    source:'Milton Berle',
    citation:'',
    tag:'humor'
  },

  {
    quote: 'People may hate you for being different and not living by society’s standards, but deep down they wish they had the courage to do the same.',
    source:'Kevin Heart',
    citation:'',
    tag:'humor'
  }

];


/***
 * `getRandomQuote` function
***/
function getRandomQuote() {
  let randomNum = Math.floor( Math.random() * quotes.length );
  console.log(randomNum);
  let quote = quotes[randomNum]; 
  return quote; 
}

/***
 * `printQuote` function
***/
function printQuote() {
  let randomQuote = getRandomQuote();
  let html = 
    `<p class='quote'>${randomQuote.quote}</p>
    <p class='source'>${randomQuote.source}
    <p class='tag'>(${randomQuote.tag})` 

    if (randomQuote.citation) {
      html += `<span class='citation'> ${randomQuote.citation} </span>`
    }
    if (randomQuote.year) {
      html += `<span class='year'>${randomQuote.year}</span>`
    }
    
    html += `</p>`
    console.log(randomQuote); 
    return document.getElementById('quote-box').innerHTML = html; 
}


/***
  create a random color 
***/

let bgColor = document.getElementById('load-quote');
let body = document.querySelector('body');


// single line statement using an implicit return 
const randomValue = () => Math.floor(Math.random() * 256);
 

// store a string in the variable 'color'
// the parameter 'func' is a function that creates a random number between 0-255. 
function randomRGB(func) {
  const color = `rgb( ${func()}, ${func()}, ${func()} )`;
  return color; 
}

bgColor.addEventListener('click', () => {
  body.style.backgroundColor = randomRGB(randomValue);
})



/***
  print quote button
***/

// document.getElementById('load-quote').addEventListener("click", () => {
//   printQuote(); 
// }); 

setInterval(() => {
  body.style.backgroundColor = randomRGB(randomValue);
  printQuote();
}, 5000); 