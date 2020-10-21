import React, {useEffect, useState} from "react";
import classes from './Cockpit.module.css'

const Cockpit = (props) => {
    const [count, setCount] = useState(0);

    useEffect( () => {
        // console.log('[Cockpit.js] useEffect!');
        const timer = setTimeout(() => {
            setCount(count + 1);
        },100);
        return () => {
            clearTimeout(timer)
            // console.log('[Cockpit.js] Cleanup useEffect!');
        }
    }, [props.length]);

    let styleRed, styleBold ;
    let btnClass;
    if(props.showPerson) {
        btnClass = classes.Red;
    }

    if(props.length <= 2) {
        styleRed = classes.red;
    }
    if(props.length <= 1) {
        styleBold = classes.bold;
    }
    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={`${styleRed} ${styleBold}`}>working
                {count}
            </p>
            <button className={btnClass}
                    onClick={() => props.toggle()}>Switch name</button>
        </div>

        )

}

export default Cockpit;
