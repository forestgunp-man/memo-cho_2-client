import React from 'react'

type memoData = {title:string, text:string}

interface props{
    onClickEvent: (data:memoData) => void;
}

const NewMemoButton = ({onClickEvent}:props) => {
  return (
    <div>
        <button onClick={() => onClickEvent({title:"無題",text:""})}>"新規メモ"</button>
    </div>
  )
}

export default NewMemoButton