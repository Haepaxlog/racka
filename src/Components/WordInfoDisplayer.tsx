import { Fragment, h } from "preact"
import { searchWord } from "../lib/wiktionaryReq"
import { useState, useEffect } from "preact/hooks"

import type { FunctionComponent } from "preact"

interface WordInfoDisplayerProps {
  word: string
  lang: string
}

export const WordInfoDisplayer: FunctionComponent<WordInfoDisplayerProps> = (
  props
) => {
  const [isClicked, setClicked] = useState(false)
  const [data, setData] = useState(null)

  useEffect(() => {
    if (localStorage.getItem(`racka-voc/${props.word}`) === null) {
      searchWord(props.word, props.lang).then((res) => {
        setData(res)
        localStorage.setItem(`racka-voc/${props.word}`, JSON.stringify(res))
      })
    } else {
      setData(JSON.parse(localStorage.getItem(`racka-voc/${props.word}`)))
    }
  }, [])

  return isClicked ? (
    <Fragment>
      <div className="relative w-fit bg-burnt-umber border-2 border-night rounded-md p-4 top-0">
        <div className="flex flex-col">
          <span>{data["word"]}</span>
          <span>{data["lang"]}</span>
        </div>
        <div>
          {data["info"].map((info: { pos: string; meaning: [string] }) => {
            return (
              <>
                <div className="flex flex-col bg-auburn border-2 border-night mt-2 mb-2 p-2">
                  <span>{info["pos"]}</span>
                  <div className="flex flex-col">
                    {info["meaning"].map((meaning: string) => {
                      return (
                        <>
                          <span>{meaning}</span>
                        </>
                      )
                    })}
                  </div>
                </div>
              </>
            )
          })}
        </div>
      </div>
      <div
        className="hover:cursor-pointer underline decoration-solid decoration-burnt-umber decoration-2"
        onClick={() => setClicked(false)}
      >
        <p>{props.word}</p>
      </div>
    </Fragment>
  ) : (
    <div
      className="w-fit hover:cursor-pointer hover:underline hover:decoration-dotted hover:decoration-burnt-umber hover:decoration-2 hover:transition"
      onClick={() => {
        if (data != null) {
          setClicked(true)
        }
      }}
    >
      <p>{props.word}</p>
    </div>
  )
}
