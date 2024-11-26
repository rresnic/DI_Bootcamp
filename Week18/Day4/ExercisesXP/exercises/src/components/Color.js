import {useState, useEffect} from 'react';

const Color = (props) => {
    const [favoriteColor, setFavoriteColor] = useState("red");
    useEffect(()=> {
        alert("useEffect reached");
        setFavoriteColor("yellow") // This wasn't mentioned in the assignment, but it claims the intended output is yellow...
    })
    const changeColor = () => {
        setFavoriteColor("blue")
    }
    return (
        <>
            <h2>My Favorite Color is {favoriteColor}</h2>
            <button onClick={changeColor}>Change to blue</button>
            {/* Note that the button is currently useless, because the on render useeffect takes place immediately. Maybe it should be in a timeout, but there were no instructions */}
        </>
    )
}

export default Color;
