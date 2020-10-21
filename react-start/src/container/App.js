import React, {Component} from 'react';
import './App.css';
import Radium, {StyleRoot} from "radium";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";

class App extends Component {

    constructor(props) {
        super(props);
        console.log('[App.js] constructor');
    }

    state = {
        person: [
            {id:'001', name: 'A', age:'27'},
            {id:'002',name: 'B', age:'28'},
            {id:'003',name: 'C', age:'29'}
        ],
        showPerson: false
    }

    static getDerivedStateFromProps(props, state) {
        console.log('getDerivedStateFromProps', props, state)
        return state;
    }

    componentWillUnmount() {
        console.log('[App.js] WillUnmount!');
    }

    componentDidMount() {
        console.log('[App.js] DidMount!');
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('[App.js] Update!');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[App.js] getSnapshotBefore!');
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[App.js] DidUpdate!');
    }

    switchNameHandler = (newName) => {
        this.setState({
            person: [
                {name: newName, age:'23'},
                {name: 'D', age:'23'},
                {name: 'D', age:'23'}
            ]
        });
    }

    changeNameHandler = (event,id) => {
        const personIndex = this.state.person.findIndex( p  => {
            return p.id === id
        });
        const person = {...this.state.person[personIndex]};
        person.name = event.target.value;
        const persons = [...this.state.person];
        persons[personIndex] = person;

        this.setState({
            person: persons
        });
    }

    deleteNameHandler = (personIndex) => {
        console.log(personIndex);
        const person = [...this.state.person];
        person.splice(personIndex,1);
        // console.log("person = ",person);
        this.setState({person: person});
    }

    togglePersonHandler = () => {
        this.setState((prevState, props) => ({showPerson: !prevState.showPerson}));
    }

    render() {
        // console.log('[App.js] render');

        let person = [];

        if(this.state.showPerson) {
            person = (
                <div>
                    <Persons click={this.deleteNameHandler}
                    change={this.changeNameHandler}
                    persons={this.state.person} />
                </div>
            )
        }

        return (
            <StyleRoot>
                <div className="App">
                    <Cockpit
                        title = {this.props.appTitle}
                        length = {this.state.person.length}
                        showPerson = {this.state.showPerson}
                        toggle = {this.togglePersonHandler}/>
                    {person}
                </div>
            </StyleRoot>
        );
    }

}


export default Radium(App);
