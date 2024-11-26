import {useState} from 'react';

const Events = (props) => {
    const [isToggleOn, setIsToggleOn] = useState(true)
    const toggle = () => {
        setIsToggleOn(!isToggleOn);
    }
    const clickMe = () => {
        alert("I was clicked");
    }
    const handleKeyDown = (e) => {
        if(e.key === "Enter") {
            alert(`The enter key was pressed, your input is: ${e.target.value}`);
        }
    }
    return (
        <>
            <button onClick={clickMe}>Click me</button>
            <br/>
            <input placeholder="Press the ENTER key!" onKeyDown={(e) => handleKeyDown(e)} />
            <br/>
            <button onClick={toggle}>{isToggleOn? "ON": "OFF"}</button>
        </>
    )
}

export default Events;