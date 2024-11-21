import React from 'react'

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
            <>
            <div>
                <input type="text" value={memoValue.title} onChange={(e) => onChangeController({"title": e.target.value})}></input>
            </div>
            <div>
                <textarea value={memoValue.text} onChange={(e) => onChangeController({"text": e.target.value})}/> 
            </div>
            </>
            
        )
    } else {
        console.log("memo is not selected");
        return(null)
    }
    
}

export default TextForm