import React from 'react'
import {MemoData} from "./type"
import './SaveAndDeleteButton.css'

interface props {
  onClickEvent: () => void
}

const SaveMemoButton = ({onClickEvent}:props) => {
  return (
      <button id="save" onClick={onClickEvent}>保存</button>
  )
}

export default SaveMemoButton