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
                <button className="rounded-md border-2 border-neutral-500 p-2 m-2" onclick={() => location.reload()}>Reload</button>
                <EpubDisplayer 
                    url={fileURL}
                    renditionRef={renditionRef}
                />
          </div>
        )
    }

    return (
        <div>
        <input className="rounded-md border-2 border-neutral-500 p-2 m-2" type="file" accept=".epub" value={fileURL.value} onchange={(event) => {
            fileURL.value = URL.createObjectURL(event.target.files[0])
            SetInitallyLoaded(true)            
        }}></input>
      </div>
    )
}