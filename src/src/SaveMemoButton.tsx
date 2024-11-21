import React from 'react'
import {MemoData} from "./type"

interface props {
  onClickEvent: () => void
}

const SaveMemoButton = ({onClickEvent}:props) => {
  return (
    <div>
      <button onClick={onClickEvent}>保存</button>
    </div>
  )
}

export default SaveMemoButton