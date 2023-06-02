import { h, render } from 'preact';
import { FilePicker } from './Components/Filepicker';
import { WordInfoDisplayer } from './Components/WordInfoDisplayer'

const App = () => {
  return(
    <div className="bg-timberwolf w-[100vw] h-[100vh]">
      <FilePicker></FilePicker>
      <WordInfoDisplayer word="jour" lang="fr"></WordInfoDisplayer>
    </div>
  )
}

render(<App/>, document.body)
