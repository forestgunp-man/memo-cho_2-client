import React from 'react'
import {MemoData} from "./type"
import './SaveAndDeleteButton.css'

interface props {
  onClickEvent: () => void
}

const DeleteRecordMemoButton = ({onClickEvent}:props) => {
  return (
      <button id="delete" onClick={onClickEvent}>メモ削除</button>
  )
}

export default DeleteRecordMemoButton