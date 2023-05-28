import { h, render } from 'preact';
import { FilePicker } from './Components/Filepicker';

const App = () => {

  return(
    <div className="">
      <FilePicker></FilePicker>
    </div>
  )
}

render(<App/>, document.body)
