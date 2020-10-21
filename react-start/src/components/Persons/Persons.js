import React, {Component} from "react";
import Person from "./Person/Person";
import PropTypes from 'prop-types';

class Persons extends Component{

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        if(nextProps.persons === this.props.persons) {
            return false
        }else {
            // console.log('[Persons.js] Update!');
            return true;
        }
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        // console.log('[Persons.js] getSnapshotBefore!');
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        // console.log('[Persons.js] DidUpdate!');
    }

    componentWillUnmount() {
        // console.log('[Persons.js] WillUnmount!');
    }

    render() {
        // console.log('[Persons.js] render');
        return (
            this.props.persons.map((p,index) => {
                return <Person name={p.name} age={p.age}
                               click={() => this.props.click(index)}
                               key={p.id}
                               change={(event) => this.props.change(event,p.id)}
                >
                    hobby: racing
                </Person>
            })
        );
    }
}
export default Persons;

Persons.prototypes = {
    peron: PropTypes.array,
    click: PropTypes.string,
    change: PropTypes.func
}
