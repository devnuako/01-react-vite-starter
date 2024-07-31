import { useState } from "react";

const TodoNew = (props) => {
    // console.log(">>> check point: ", props)
    // const { addNewTodo } = props;
    // addNewTodo("testalert") //fire

    //useState hook (getter/setter)
    const [valueInput, setValueInput] = useState("test1")

    const handleClick = () => {
        console.log(">>> check valueInput: ", valueInput)
    }

    const handleOnChange = (name) => {
        setValueInput(name)
    }

    return (
        <div className='todo-new'>
            <input type="text" 
                onChange={(event) => handleOnChange(event.target.value)}
            />
            <button
                style={{ cursor: "pointer" }}
                onClick={handleClick}
            >Add</button>
            <div>
                My text input is = {valueInput}
            </div>
        </div>
    )
}

export default TodoNew;
