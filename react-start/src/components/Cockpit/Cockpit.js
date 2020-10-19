import React from "react";
import classes from './Cockpit.css'

const Cockpit = (props) => {
    let styleClasses = [];
    let btnClass;
    if(props.showPerson) {
        btnClass = classes.Red;
    }

    if(props.length <= 2) {
        console.log(styleClasses);
        styleClasses.push(classes.red);
    }
    if(props.length <= 1) {
        styleClasses.push(classes.bold);
    }
    return (
        <div className={classes.Cockpit}>
            <h1>react app</h1>
            <p className={styleClasses.join(' ')}>working</p>
            <button style={btnClass}
                    onClick={() => props.toggle()}>Switch name</button>
        </div>

        )

}

export default Cockpit;
