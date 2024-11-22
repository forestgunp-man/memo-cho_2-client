import React from 'react'
import './TextForm.css'

import {MemoData, MemoItem, MemoValue} from "./type"


interface props{
    memoValue: MemoValue | undefined;
    updateFunc: (inputMemoValue: MemoValue) => void;
}

const TextForm = ({memoValue, updateFunc}:props) => {
    //console.log("TextForm_memoValue! ...", memoValue)

    //データをまとめるやつ。更新イベントに渡す。
    const onChangeController = (data:{"title": string} | {"text": string}): void => {
        if (memoValue !== undefined) {
            //console.log("onChangeController! ...", memoValue)
            const resultData: MemoValue = memoValue; //初期値
            if ("title" in data) {
                Object.assign(resultData, data);
            } else if ("text" in data) {
                Object.assign(resultData, data);
            }

            updateFunc(resultData);
        }
        
    }

    if (memoValue !== undefined ){
        return (
            <div id="screen">
                <div id="title">
                    <input id="input" type="text" value={memoValue.title} onChange={(e) => onChangeController({"title": e.target.value})}></input>
                </div>
                <div id="text">
                    <textarea id="textarea" value={memoValue.text} onChange={(e) => onChangeController({"text": e.target.value})}/> 
                </div>
            </div>
            
        )
    } else {
        console.log("memo is not selected");
        return(
            <div id="screen">
                <div id="title">
                    <input id="input" value={""} disabled type="text"></input>
                </div>
                <div id="text">
                    <textarea id="textarea" disabled value={""}/> 
                </div>
            </div>
        )
    }
    
}

export default TextForm