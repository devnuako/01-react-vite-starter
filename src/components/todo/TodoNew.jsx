const TodoNew = (props) => {
    console.log(">>> check point: ", props)
    const { addNewTodo } = props;

    addNewTodo("testalert")
    return (
        <div className='todo-new'>
            <input type="text" />
            <button>Add</button>
        </div>
    )
}

export default TodoNew;
