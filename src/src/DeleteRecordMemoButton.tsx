import React from 'react'
import {MemoData} from "./type"

interface props {
  onClickEvent: () => void
}

const DeleteRecordMemoButton = ({onClickEvent}:props) => {
  return (
    <div>
      <button onClick={onClickEvent}>メモ削除</button>
    </div>
  )
}

export default DeleteRecordMemoButton