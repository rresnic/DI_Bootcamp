import { useState, useEffect } from "react"
import quotes from "../assets/quotes.js"
export const Quote = (props) => {
    const [curQuote, setCurQuote] = useState({quote: "", author: ""});
    const [curFontColor, setCurFontColor] = useState("rgb(0,0,0)");
    const getNewQuote = () => {
        let newQuote = curQuote;
        while(newQuote.quote == curQuote.quote) {
            newQuote = quotes[Math.floor(Math.random() * quotes.length)]
        }
        setCurQuote(newQuote);
    }

    useEffect(()=>{
        randomize();
    }, [])
    function getRandomRgbColor() {
        const r = Math.floor(Math.random() * 256); 
        const g = Math.floor(Math.random() * 256); 
        const b = Math.floor(Math.random() * 256); 
        return `rgb(${r}, ${g}, ${b})`;
      }
    
    const changeBackgroundColor = () => {
        document.body.style.backgroundColor = getRandomRgbColor();
    }

    const changeFontColor = () => {
        setCurFontColor(getRandomRgbColor());
    }

    
    const randomize = () => {
        changeBackgroundColor();
        getNewQuote();
        changeFontColor()
    }

    return (
            <div id="quote" style={{color: curFontColor, backgroundColor:"white", width:"50%", minWidth: "500px",margin:"auto"}}>
                <h2>"{curQuote.quote}"</h2>
                <h5 style={{textAlign:"right"}}>-{curQuote.author}-</h5>
                <button onClick={randomize} style={{color: "white", backgroundColor: getRandomRgbColor()}}>Get new Quote</button>
            </div>
    )
}