

//メモ単体の型
export type MemoData = {id:number, title:string,text:string};

export type MemoItem = Pick<MemoData, "id" | "title">;
export type MemoValue = Pick<MemoData, "title" | "text">;

export const createMemoValue = (memo: MemoData | undefined): MemoValue | undefined=> {
    if (memo !== undefined) {
        return {
            title: memo.title,
            text: memo.text,
          };
    } else {
        return undefined;
    }
    
};  