import {useState} from 'react';
import Garage from './Garage';

const Car = (props) => {
    const {carinfo} = props;
    const [color, setColor] = useState("red")
    return (
        <>
            <h1>This car is {color} {carinfo.model}</h1>
            <Garage size="small"/>
        </>
    )
}

export default Car;