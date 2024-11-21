import React from 'react'
import {MemoItem} from "./type"


import ButtonList from "./ButtonList"

interface props{
	memoList: MemoItem[];
	onClickEvent: (id:number) => any;
}



const MemoList= ({memoList,onClickEvent}:props) => {

	const dataList = memoList ? memoList.map((data) => {
		const result = {"label":data.title, "id":data.id};
		return result;
	}): []

	return (
		<ButtonList dataList={dataList} onClickEvent={onClickEvent}/>
	)
}


export default MemoList