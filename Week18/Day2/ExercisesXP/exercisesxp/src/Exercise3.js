import React from "react";
import logo from './logo.svg';
import './Exercise.css';

class Exercise extends React.Component{
    // The instructions for the header are CONTRADICTORY. You originally said to do all of these in the same file, so a) how is it possible to have both the styling of color
 style_header = { // red and background lightblue, as well as using this object to style the h1? Also, you can't use const within a class component, unless we're meant to define it outside of the class?? Please review the assignment and fix it
  color: "white",
  backgroundColor: "DodgerBlue",
  padding: "10px",
  fontFamily: "Arial"
};
    render(){
        return (
            <>
                <h1 style={{color:"red",backgroundColor: "lightblue"}}>This is a Header</h1> 
                 <h1 style={this.style_header}>This is a Header</h1> 

                <p className="para">This is a paragraph</p>
                <a href="http://localhost:3000">This is a link</a>
                <form> This is a form:
                    <label htmlFor="nameInput">Enter your name </label>
                    <input id="nameInput"/><button>Submit</button>
                </form>
                <img src={logo} alt="Placeholder" width="150" height="150" />
                <ul>
                    This is a List:
                    <li>Coffee</li>
                    <li>Tea</li>
                    <li>Milk</li>
                </ul>
            </>
        )
    }
}

export default Exercise;