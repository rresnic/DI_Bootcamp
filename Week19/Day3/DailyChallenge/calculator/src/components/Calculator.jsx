import {useState} from "react";
export const Calculator = (props) => {

    const [output, setOutput] =  useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        const a = e.target.operand_a.value;
        const b = e.target.operand_b.value;
        setOutput(`${parseFloat(a) + parseFloat(b)}`)
    }

    return (
        <>
            <h2>Adding Two Numbers</h2>
            <form onSubmit={(e) => {handleSubmit(e)}}>
                <input name="operand_a" />
                <input name="operand_b" />
                <input type="submit" value="Add" />
            </form>
            <h3>{output}</h3>
        </>
    )
};