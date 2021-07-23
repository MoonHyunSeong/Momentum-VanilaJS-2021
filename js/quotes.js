const quotes = [
    {
        quotes: "Never forget what a man says to you when he is angry.",
        author: "Henry Ward Beecher",
    },
    {
        quotes: "Happiness gives us the energy which is the basis of health.",
        author: "Henri-Frederic Amiel",
    },
    {
        quotes: "With Heaven's aid I have conquered for you a huge empire. But my life was too short to achieve the conquest of the world. That task is left for you",
        author: "Genghis Khan",
    },
    {
        quotes: "An executive is a person who always decides; sometimes he decides correctly, but he always decides.",
        author: "John H. Patterson",
    },
    {
        quotes: "The grand aim of all science is to cover the greatest number of empirical facts by logical deduction from the smallest number of hypotheses or axioms.",
        author: "Albert Einstein",
    },
    {
        quotes: "Knowledge is power.",
        author: "Sir Francis Bacon",
    },
    {
        quotes: "Those who know how to win are much more numerous than those who know how to make proper use of their victories.",
        author: "Polybius",
    },
    {
        quotes: "Grief teaches the steadiest minds to waver.",
        author: "Sophocles",
    },
    {
        quotes: "The fear of death is more to be dreaded than death itself.",
        author: "Publilius Syrus",
    },
    {
        quotes: "Live always in the best company when you read.",
        author: "Sydney Smith",
    },

];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()* quotes.length)];

quote.innerText = todaysQuote.quotes;
author.innerText = todaysQuote.author;