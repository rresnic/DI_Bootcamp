import React from 'react';
import Child from './Child';

class Color extends React.Component{
    constructor(){
        super();
        this.state = {
            favoriteColor: "red",
            show: true,
        }
    }

    changeColor = (color="blue") => {
        this.setState({favoriteColor:color})
    }

    shouldComponentUpdate = () => {
        return true;
    }
    componentDidMount = () => {
        setTimeout(()=> {this.changeColor("yellow")}, 5000)
    }
    componentDidUpdate = () => {
        console.log("after update");
    }

    getSnapshotBeforeUpdate = () => {
        console.log("in getSnapshotBeforeUpdate");
        return null;
        
    }
    render(){
        return (
            <>
                <h2>My Favorite Color is {this.state.favoriteColor}</h2>
                <button onClick={() => this.changeColor()}>Change to blue</button>
                {this.state.show? <Child/>: null}
                <button onClick={() => this.setState({show: false})}>Delete</button>
                {/* Note that the button is currently useless, because the on render useeffect takes place immediately. Maybe it should be in a timeout, but there were no instructions */}
            </>
        )
    }
}

export default Color;
