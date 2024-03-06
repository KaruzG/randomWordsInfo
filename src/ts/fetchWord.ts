// Uses https://rapidapi.com/dpventures/api/wordsapi/ API

export function getNewWord() {
	// API CONFIG:
	const API_key: string = ""

	const options: object = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': API_key,
			'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
		}
	}

	// Some responses doesnt have much info of the word, would be better to skip them (checkResponseInfo())
	async function fetchWord() {
		try {
			let API_Calls: number = 0;
			while (true) {
				if (API_Calls >= 10) {
					console.log("Too many calls to WordsApi")
					return false;
				}

				const response: Response = await fetch("https://wordsapiv1.p.rapidapi.com/words/?random=true", options)
				API_Calls++
				const result: object = await response.json();
		
				if (checkResponseInfo(result)) { return result }
			}

		} catch (error) {
			throw new Error("Couldn't fetch any word!")
		}
	}

	function checkResponseInfo(response: object) {
		if ("results" in response) {
			return true
		} else {
			return false
		}
	}

	return fetchWord()
}

