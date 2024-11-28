import React from "react";

class Child extends React.Component{
    componentWillUnmount = () => {
        alert("Component will unmount")
    }
    render(){
        return <h2>Hello World!</h2>;
    }
}

export default Child;