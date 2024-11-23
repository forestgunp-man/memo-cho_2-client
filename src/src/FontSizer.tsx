import react from 'react'
import './FontSizer.css'

interface props {
    fontSizeValue: number;
    setFontSizeValue: React.Dispatch<React.SetStateAction<number>>;
}

const FontSizer = ({fontSizeValue, setFontSizeValue}:props) => {

    const zoomIn = (fontSizeValue:number):void => {
        if (fontSizeValue < 64) {
            setFontSizeValue(fontSizeValue + 8)
        }
    }

    const zoomOut = (fontSizeValue:number):void => {
        if (fontSizeValue > 16) {
            setFontSizeValue(fontSizeValue - 8)
        }
    }

    return(
        <div id="div">
            <button onClick={() => zoomIn(fontSizeValue)}>大</button>
            <p>文字サイズ</p>
            <button onClick={() => zoomOut(fontSizeValue)}>小</button>
        </div>
        
    )
}

export default FontSizer