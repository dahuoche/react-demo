import React, {Component} from "react";
import './Person.css';
import Radium from "radium";

class Person extends Component{


    shouldComponentUpdate(nextProps, nextState, nextContext) {
        if(this.inputElement.value === 'B') {
            this.inputElement.focus();
        }
        console.log(nextProps.name, this.props.name);
        if(nextProps.name === this.props.name) {
            return false;
        }else {
            // console.log('[Person.js] Update!');
            return true;
        }
        // return true;
    }

    render() {
        console.log('[Person.js] render');
        const style ={
            '@media (max-width: 1000px)' : {
                width: '950px',
                background: 'aqua'
            }
        };
        return (
            <div className="Person" style={style}>
                <p onClick={this.props.click}>name:{this.props.name}, age:{this.props.age}</p>
                <p>{this.props.children}</p>
                <input ref={inputRef => {
                    this.inputElement = inputRef;
                }}
                    type="text" onChange={this.props.change} value={this.props.name}/>
            </div>
        )
    }


}

export default Radium(Person);
