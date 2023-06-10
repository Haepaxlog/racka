import { h } from "preact"
import { signal } from "@preact/signals"
import { useState, useRef } from "preact/hooks"
import { EpubDisplayer } from "./EpubDisplayer"

import type { FunctionComponent } from "preact"

const fileURL = signal("")

interface FilePickerProps {}

export const FilePicker: FunctionComponent<FilePickerProps> = () => {
  const [isInitiallyLoaded, SetInitallyLoaded] = useState(false)
  const renditionRef = useRef(null)

  if (isInitiallyLoaded) {
    return (
      <div>
        <div className="border-b-2 border-night">
          <button
            className="rounded-md border-2 border-night p-2 m-2 bg-burnt-umber"
            onClick={() => location.reload()}
          >
            Reload
          </button>
        </div>
        <EpubDisplayer url={fileURL.value} renditionRef={renditionRef} />
      </div>
    )
  }

  return (
    <div>
      <input
        className="rounded-md border-2 border-night p-2 m-2 bg-burnt-umber"
        type="file"
        accept=".epub"
        value=""
        onChange={(event) => {
          const target = event.target as HTMLInputElement
          fileURL.value = URL.createObjectURL(target.files[0])
          SetInitallyLoaded(true)
        }}
      ></input>
    </div>
  )
}
