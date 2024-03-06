"use strict";
// Uses https://rapidapi.com/dpventures/api/wordsapi/ API
// API CONFIG:
const API_key = "69978fe67bmsh186b9ad76fce78ap1fb63fjsn43a025c00d3f";
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': API_key,
        'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
    }
};
// Some responses doesnt have much info of the word, would be better to skip them (checkResponseInfo())
async function fetchWord() {
    try {
        while (true) {
            const response = await fetch("https://wordsapiv1.p.rapidapi.com/words/?random=true", options);
            const result = await response.json();
            if (checkResponseInfo(result)) {
                return result;
            }
        }
    }
    catch (error) {
        throw new Error("Couldn't fetch any word!");
    }
}
function checkResponseInfo(response) {
    if ("results" in response) {
        return true;
    }
    else {
        return false;
    }
}
