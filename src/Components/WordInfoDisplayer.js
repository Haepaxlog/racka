import { Fragment, h } from 'preact'
import { searchWord } from '../lib/wiktionaryReq'
import { signal } from '@preact/signals'
import { useState, useEffect } from 'preact/hooks'

const data = signal(null)

export const WordInfoDisplayer = (props) => {
    const [isClicked, setClicked] = useState(false)

    useEffect(() => {
        if (localStorage.getItem(props.word) === null) {
            searchWord(props.word, props.lang).then((res) => {
                data.value = res
                localStorage.setItem(props.word, JSON.stringify(res))
            })
        } else {
            data.value = JSON.parse(localStorage.getItem(props.word))
        }
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
            }
        }}>
            <p>{props.word}</p>
        </div>)
}

