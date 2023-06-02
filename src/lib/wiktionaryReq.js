import striptags from "striptags"
import { languages } from "./languageAbbrev"

const endpointURL = "https://en.wiktionary.org/api/rest_v1/page/definition/"

export async function searchWord(word, lang) {
    const data = await fetch(`${endpointURL}${word}`, {
        headers: {
            "Content-Type": "application/json",
          }
    }).then((res) => {
        return res.json().then((json) => {
            let answer = {
                "word": word,
                "lang": languages[lang]
            }

            if (json[lang] != null && json[lang] != undefined) {
                const data = json[lang]

                answer["info"] = stripTagsFromData(data)
                return answer                
            } 
            return undefined
        })
    }).catch((err) => {
        console.log(err)
        return undefined
    })

    return data
}

function stripTagsFromData(data) {
    return data.map((entry) => {
        if (entry["definitions"] != null && entry["definitions"] != undefined) {
        return { meaning: entry["definitions"].map((definition) => {
            return striptags(definition["definition"])
        }), pos: entry["partOfSpeech"]}
        } 
        return { meaning: entry, pos: entry["partOfSpeech"] }
    })
}
