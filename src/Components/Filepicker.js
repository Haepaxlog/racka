import { h } from 'preact';
import { signal } from '@preact/signals';
//import { ePub } from 'epubjs';

const fileURL = signal("")

export const FilePicker = () => {
    return (
        <div>
        <input id="filepicker" type="file" value={fileURL.value} onchange={(event) => {
            alert(event.target.files[0].src)
            fileURL.value = URL.createObjectURL(event.target.files[0].src)
        }}></input>
       
      </div>
    )
}