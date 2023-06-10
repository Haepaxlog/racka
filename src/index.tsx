import { h, render } from "preact"
import { FilePicker } from "./Components/Filepicker"
import { WordInfoDisplayer } from "./Components/WordInfoDisplayer"

import type { FunctionComponent } from "preact"

interface AppProps {}

const App: FunctionComponent<AppProps> = () => {
  return (
    <div className="bg-timberwolf w-[100vw] h-[100vh]">
      <FilePicker></FilePicker>
      <div className="relative mt-20">
        <WordInfoDisplayer word="jour" lang="fr"></WordInfoDisplayer>
      </div>
      <div className="relative mt-20">
        <WordInfoDisplayer word="bonne" lang="fr"></WordInfoDisplayer>
      </div>
    </div>
  )
}

render(<App />, document.body)
