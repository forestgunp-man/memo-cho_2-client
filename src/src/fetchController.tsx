import {MemoData, MemoItem, MemoValue} from "./type";
const apiUrl = process.env.REACT_APP_API_URL; //envからapiURLをもってくる

//メモタイトルと対応するメモIDのリストを取ってくる関数
export const getMemoList = async (): Promise<MemoItem[]> => {
    console.log("getMemoList!");
    try {
        const response = await fetch(`${apiUrl}/getMemoList`);
        const memoList = await response.json();
        return memoList;
    } catch (error) {
        console.error("Fetch error! getMemoList メモリストの取得に失敗 空の配列を返します" + apiUrl + "dayo ", error);
        return []; // エラー時に空の配列を返す
    }
}

//メモIDを指定してメモの内容を取ってくるやつ。
export const getMemoData = async (id:number): Promise<any> => {
    console.log("fc_getMemoData! id ... ", id);
    try {
        const response = await fetch(`${apiUrl}/getMemoData?id=${id}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Fetch error! getMemoData メモデータの取得に失敗 空のオブジェクトを返します", error);
        return {}; // エラー時に空のオブジェクトを返す
    }
}

//メモIDを指定して、新しいメモ内容を上書きするやつ
export const recordMemoUpdate = async (memoData:MemoData | undefined): Promise<any> => {
    console.log("fc_recordMemoUpdate! memoData ... ", memoData);
    if (memoData !== undefined) {
        try {
            await fetch(`${apiUrl}/recordMemoUpdate`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(memoData)
            })
        } catch(error) {
            console.log("エラーだが？？ -> ", error)
        }
    } else {
        console.log("fc_recordMemoUpdate failed!! argument is undefiend!")
    }
    
}

//メモIDを指定してメモを消すやつ
export const deleteMemo = async (id: number): Promise<void> => {
    console.log("fc_deleteMemo!! id ... ",id);
    try{
        const response = await fetch(`${apiUrl}/deleteMemo`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({"id": id})
        });
        if (!response.ok){
            throw new Error(`HTTP エラー: ${response.status}`);
        }
    } catch(error){
        console.error("エラーだが？？ -> ", error);
      };
}

//新しくメモを追加するやつ
export const newRecordMemo = async (memoData: {title:string, text:string}): Promise<{"id":number} | undefined> => {
    console.log("fc_newRecordMemo! memoData... ", memoData)
    try {
        const response = await fetch(`${apiUrl}/newRecordMemo`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(memoData)
        });
        // if (!response.ok) {
        //     throw new Error(`HTTP エラー: ${response.status}`);
        // }
        
        const id:{"id": number} = await response.json();
        console.log("追加したデータのid", id);
        return id;
    } catch (error) {
        console.error("リクエストエラー:", error);
        return undefined;
        
    }
}



// [
//     {id:1, name:"bob", age:27},
//     {id:2, name:"alice", age:14},
//     {id:3, name:"jhon", age:19},
//     {id:4, name:"mike", age:20},
//     {id:5, name:"anna", age:15}    
// ]