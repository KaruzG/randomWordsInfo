// Uses https://rapidapi.com/dpventures/api/wordsapi/ API
const API_key: string = "69978fe67bmsh186b9ad76asdjsn43a025c00d3f"
//const API_key: string = "69978fe67bmsh186b9ad76fce78ap1fb63fjsn43a025c00d3f"

const options: object = {
    method: 'GET',
	headers: {
		'X-RapidAPI-Key': API_key,
		'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
	}
}

async function fetchWord() {
	try {
		const response: Response = await fetch("https://wordsapiv1.p.rapidapi.com/words/?random=true", options)
		const result = await response.json();
		return result
	} catch (error) {
		console.log("Error: Couldnt fetch new world")
		return false
	}
}

// Some responses doesnt have much info of the word, would be better to skip them
function checkResponseInfo(response: object) {
	const wantedProperties: string[] = ["word"]
}

console.log(fetchWord());
