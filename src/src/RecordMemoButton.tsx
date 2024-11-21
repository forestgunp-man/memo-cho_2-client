import React from 'react'


type memo = {"title":string, "text":string}

interface props{
    onClickEvent: (memo:memo) => void;
    recordMemo: memo;
    
}



const RecordMemoButton = ({onClickEvent, recordMemo}:props) => {
  return (
    <>
      <button onClick={() => onClickEvent(recordMemo)}>メモ追加</button>
    </>
    
  )
}

export default RecordMemoButton