import { h, render } from "preact"
import { useState } from "preact/hooks"
import { ReactReader } from "react-reader"
import { WordInfoDisplayer } from "./WordInfoDisplayer"

import type { FunctionComponent } from "preact"

interface EpubDisplayerProps {
  url: string
  renditionRef: any
}

export const EpubDisplayer: FunctionComponent<EpubDisplayerProps> = (props) => {
  const [location, setLocation] = useState(null)
  const [firstRenderDone, setFirstRenderDone] = useState(false)

  const locationChanged = (epubcifi) => {
    // We are getting the Reference to current rendered view here
    console.log(
      "location changed:",
      props.renditionRef.current.getContents()[0]
    )

    //let textContent = props.renditionRef.current.getContents()[0]["content"]["innertext"]
    const rendition = props.renditionRef.current.getContents()[0]["content"]

    // We can render preact into the html
    // render(<WordInfoDisplayer lang="fr" word="jour"></WordInfoDisplayer>, rendition )

    if (!firstRenderDone) {
      setLocation(localStorage.getItem("racka/book-progress"))
      setFirstRenderDone(true)
      return
    }

    localStorage.setItem("racka/book-progress", epubcifi)
    // epubcifi is a internal string used by epubjs to point to a location in an epub. It looks like this: epubcfi(/6/6[titlepage]!/4/2/12[pgepubid00003]/3:0)
    setLocation(epubcifi)
  }

  return (
    <div style={{ height: "100vh" }}>
      <ReactReader
        location={location}
        locationChanged={locationChanged}
        url={props.url}
        epubInitOptions={{
          openAs: "epub",
        }}
        getRendition={(rendition) => {
          props.renditionRef.current = rendition
        }}
      />
    </div>
  )
}
