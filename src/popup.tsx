import { h, render } from 'preact'

import type { FunctionComponent } from 'preact'

interface PopUpProps {}

const PopUp: FunctionComponent<PopUpProps> = () => {
  return(
    <div className="flex flex-col gap-2 p-4 bg-timberwolf">
    <span>Racka</span>
    <div className="bg-[url(../icons/racka_logo.png)] bg-cover w-28 h-20"></div>
    <a className="rounded-md border-2 border-night p-2 bg-burnt-umber" href="index.html" rel="noopener" target="_blank">
      Open Reader
    </a>
    </div>
  )
}
  
render(<PopUp/>, document.body)
