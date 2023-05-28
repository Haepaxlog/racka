import { h, render } from 'preact'

const PopUp = () => {
  return(
    <div className="flex flex-col gap-2 p-4">
    <span>Racka</span>
    <a className="rounded-md border-2 border-neutral-500 p-2" href="index.html" rel="noopener" target="_blank">
      Open Reader
    </a>
    </div>
  )
}
  
render(<PopUp/>, document.body)
