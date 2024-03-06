"use strict";
// Uses https://rapidapi.com/dpventures/api/wordsapi/ API
const API_key = "";
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': API_key,
        'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
    }
};
async function fetchWord() {
    try {
        const response = await fetch("https://wordsapiv1.p.rapidapi.com/words/?random=true", options);
        const result = await response.json();
        return result;
    }
    catch (error) {
        console.log("Error: Couldnt fetch new world");
        return false;
    }
}
// Some responses doesnt have much info of the word, would be better to skip them
function checkResponseInfo(response) {
    const wantedProperties = ["word"];
}
console.log(fetchWord());
