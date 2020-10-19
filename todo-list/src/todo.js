import React from "react";

const Todo = (props) => {
    return (
        <div className='Todo'>
            <p onClick={props.click}>{props.id} . {props.title}</p>
        </div>
    )
}

export default Todo;
