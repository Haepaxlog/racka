import { Fragment, h } from 'preact'
import { searchWord } from '../lib/wiktionaryReq'
import { signal } from '@preact/signals'
import { useState, useEffect } from 'preact/hooks'

const data = signal(null)

export const WordInfoDisplayer = (props) => {
    const [isClicked, setClicked] = useState(false)

    useEffect(() => {
        searchWord(props.word, props.lang).then((res) => {
            data.value = res
        })
    }, [])

    return isClicked
    ? (
        <Fragment>
        <div onclick={() => setClicked(false)} className="absolute w-6 h-6 bg-white">
            <span>{data.value["word"]}</span>
            <span>{data.value["lang"]}</span>
            <div>
           {
                data.value["info"].map((info) => {
                    return (<>
                    <span>{info["pos"]}</span>
                    <div>{info["meaning"].map((meaning) => {
                        return (<>
                            <span>{meaning}</span>
                        </>)
                    })}</div>
                    </>)
                })
            }
        </div>
    </div>
    </Fragment>
    ) 
    : (<div onclick={() => {
        if (data.value != null) {
            setClicked(true)
        }}}>
        <p>{props.word}</p>
        </div>)
}

