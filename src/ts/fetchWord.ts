// Uses https://rapidapi.com/dpventures/api/wordsapi/ API
export function getNewWord() {
	// API CONFIG:
	const MAX_API_ATTEMPTS: number = 5;
	const API_key: string = ""

	const options: object = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': API_key,
			'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
		}
	}

	interface Word {
		word: string;
		results: Array<Results>;
		pronunciation?: Pronunciation;
	}
	
	interface Results {
		definition?: string;
		synonyms?: Array<string>
		antonyms?: Array<string>
		rhymes?: Array<string>
	}
	
	interface Pronunciation {
		all: string;
	}

	// Some responses doesnt have much info of the word, would be better to skip them (checkResponseInfo())
	async function fetchWord() {
		try {
			let API_Calls: number = 0;
			while (true) {
				if (API_Calls >= MAX_API_ATTEMPTS) {
					console.log("Too many calls to WordsApi")
					return false;
				}

				const response = await fetch("https://wordsapiv1.p.rapidapi.com/words/?random=true", options)

				API_Calls++
				
				let result = await response.json();
				let word: Word = result;
		
				if (checkResponseInfo(word)) { return word }
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

