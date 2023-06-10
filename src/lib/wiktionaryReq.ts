import striptags from "striptags"
import { languages } from "./languageAbbrev"

const endpointURL: string =
  "https://en.wiktionary.org/api/rest_v1/page/definition/"

type InfoData = {
  pos: string
  meaning: [string]
}

type wiktionaryData = {
  word: string
  lang: string
  info: [InfoData]
}

export async function searchWord(word: string, lang: string) {
  const data: wiktionaryData = await fetch(`${endpointURL}${word}`, {
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      return res.json().then((json) => {
        let answer = {
          word: word,
          lang: languages[lang],
        }

        if (json[lang] != null && json[lang] != undefined) {
          const data = json[lang]

          answer["info"] = stripTagsFromData(data)
          return answer
        }
        return undefined
      })
    })
    .catch((err) => {
      console.log(err)
      return undefined
    })

  return data
}

function stripTagsFromData(data) {
  return data.map((entry) => {
    if (entry["definitions"] != null && entry["definitions"] != undefined) {
      return {
        meaning: entry["definitions"].map((definition) => {
          return striptags(definition["definition"])
        }),
        pos: entry["partOfSpeech"],
      }
    }
    return { meaning: entry, pos: entry["partOfSpeech"] }
  })
}
