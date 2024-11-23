
import {useState, useEffect} from "react";
import './App.css';

//import TextForm from "./src/TextForm";
import MemoList from "./src/MemoList";
import NewMemoButton from "./src/NewMemoButton";
import RecordMemoButton from "./src/RecordMemoButton"
import SaveMemoButton from "./src/SaveMemoButton"
import FontSizer from "./src/FontSizer";

import * as fetchController from "./src/fetchController";

//型
import {createMemoValue, MemoData, MemoItem, MemoValue, Pixel} from "./src/type"
import TextForm from "./src/TextForm";
import DeleteRecordMemoButton from "./src/DeleteRecordMemoButton";





const resData: string = "b";


// const kariMemoData: memoData[] = [
//   {title:"お天気めも",text:"今日はすごくいい天気"},
//   {title:"買い物メモ",text:"胡椒\n牛乳\nたまねぎ"},
//   {title:"予定メモ",text:"4/5 映画を見に行く\n4/9 メソポタミア文明を興す\n4/12 友達を作る"}
// ]





function App() {

  //----------------onClickEvent----------------



  //----------------method----------------

  
  //メモ消すイベント
  const deleteMemo = async (): Promise<void> => {
    if (memoData !== undefined) {
      console.log("deleteMemo! ... ", memoData.id);
      await fetchController.deleteMemo(memoData.id);
      //メモリストを更新
      const newMemoList = await fetchController.getMemoList();
      setMemoList(newMemoList);
      //現在のメモを破棄する
      setMemoData(undefined);
    } else {
      console.log("memoData is undefined!!")
    }
  }

  //新規メモを追加するイベント
  const newRecordMemo = async (memo: {"title":string, "text":string}): Promise<void> => {
    console.log("newRecordMemo! ... ", memo);
    const newMemoId:{"id":number} | undefined = await fetchController.newRecordMemo(memo);
    if (newMemoId !== undefined) {
      console.log("aaaaaaaaaaaatestaaaaaaaaaa", newMemoId)
      //新規メモを選択
      selectMemo(newMemoId.id)
      //メモリストを更新
      const newMemoList = await fetchController.getMemoList();
      setMemoList(newMemoList); 
    } else {
      console.log("newRecordMemo failed!!");
    }
    
  }

  //メモを選択した際のイベント
  const selectMemo = async (id:number): Promise<void> => {
    console.log("selectMemo! id ... ", id);
    const fetchMemoData = await fetchController.getMemoData(id);
    console.log("fetchMemoData... ", fetchMemoData);
    const noAryData = fetchMemoData[0];
    setMemoData(noAryData);
  }

  //入力された内容をメモに更新する関数
  const inputMemoUpdate = (inputMemoValue: MemoValue): void => {
    //console.log("inputMemoUpdate...", inputMemoValue);
    setMemoData(Object.assign(inputMemoValue, {"id": memoData?.id}) as MemoData);

  }

  //データベースのメモ内容を上書き保存する
  const recordMemoUpdate = async (): Promise<void> => {
    console.log("recordMemoUpdate!");
    await fetchController.recordMemoUpdate(memoData);
    //メモリストを更新
    const newMemoList = await fetchController.getMemoList();
    setMemoList(newMemoList); 
  }

  //テスト用
  const tempFunc = (id: number): void => {
    console.log("testFunc!! ... ", id);
  }

  

  //----------------useState----------------


  const [memoList, setMemoList] = useState<MemoItem[]>([]);
  const [memoData, setMemoData] = useState<MemoData|undefined>(undefined);
  const [fontSizeValue, setFontSizeValue] = useState<number>(24);
  


  //----------------arg----------------

  const newMemoInitialValue :MemoValue = {"title": "新規メモ", "text": ""};



  useEffect(() => {

    //初期メモリストを読み込み
    fetchController.getMemoList().then(data => setMemoList(data));
    console.log("init_useEffect!")
    

  }, []); // 初回レンダリング時に一度だけ実行
  
  
  // function displayMemo(data:memoData){
  //   //console.log(memoData);
  //   setMemoData(data);



  return (
    <>
      <div id="app">

        <div id="memoList">
          <RecordMemoButton onClickEvent={newRecordMemo} recordMemo={newMemoInitialValue}/>
          <MemoList memoList={memoList} onClickEvent={selectMemo}/>
        </div>

        <div id="rightDiv">
          <div id="textForm">
            <TextForm memoValue={createMemoValue(memoData)} fontSizeValue={fontSizeValue} updateFunc={inputMemoUpdate}/>
          </div>

          <div id="memoOption">
            <div>
              <FontSizer fontSizeValue={fontSizeValue} setFontSizeValue={setFontSizeValue}/>
            </div>
            <div id="saveAndDelete">
              <div id="saveButton">
                <SaveMemoButton onClickEvent={recordMemoUpdate}/>
              </div>
              <div id="deleteButton">
                <DeleteRecordMemoButton onClickEvent={deleteMemo}/>
              </div>
              
            </div>
            
          </div>
        </div>
      
      </div>
    </>
  );

}





export default App;
