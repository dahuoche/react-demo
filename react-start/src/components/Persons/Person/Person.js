import React from "react";
import './Person.css';
import Radium from "radium";

const Person = (props) => {
    const style ={
        '@media (max-width: 1000px)' : {
            width: '950px',
            background: 'aqua'
        }
    };
    return (
        <div className="Person" style={style}>
            <p onClick={props.click}>name:{props.name}, age:{props.age}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.change} value={props.name}/>
        </div>
    )

}

export default Radium(Person);
