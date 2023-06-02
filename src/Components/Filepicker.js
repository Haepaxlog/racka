import { h } from 'preact'
import { signal } from '@preact/signals'
import { useState, useRef } from 'preact/hooks'
import { EpubDisplayer } from './EpubDisplayer'

const fileURL = signal("")

export const FilePicker = () => {
    const [isInitiallyLoaded, SetInitallyLoaded] = useState(false)
    const renditionRef = useRef(null)
    
    if (isInitiallyLoaded) {
        return (
            <div>
                <div className="border-b-2 border-night">
                    <button className="rounded-md border-2 border-night p-2 m-2 bg-burnt-umber" onclick={() => location.reload()}>Reload</button>
                </div>
                <EpubDisplayer 
                    url={fileURL}
                    renditionRef={renditionRef}
                />
          </div>
        )
    }

    return (
        <div>
        <input className="rounded-md border-2 border-night p-2 m-2 bg-burnt-umber" type="file" accept=".epub" value="" onchange={(event) => {
            fileURL.value = URL.createObjectURL(event.target.files[0])
            SetInitallyLoaded(true)            
        }}></input>
      </div>
    )
}