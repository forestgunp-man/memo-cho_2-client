import react from 'react'

type buttonData = {"label": string, "id": number}
interface props {
    dataList: buttonData[] | undefined;
    onClickEvent: (id:number) => any;
}

const ButtonList = ({dataList, onClickEvent}:props) => {
    return(
        <ul>
		    {dataList && dataList.map((data) => (
			    <li key={data.id}>
				    <button onClick={() => onClickEvent(data.id)}>{data.label}</button>
			    </li>
		    ))}
	    </ul>
    )
}

export default ButtonList