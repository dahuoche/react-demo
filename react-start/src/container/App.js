import React, {Component} from 'react';
import './App.css';
import Radium, {StyleRoot} from "radium";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";

class App extends Component {
    state = {
        person: [
            {id:'001', name: 'A', age:'27'},
            {id:'002',name: 'B', age:'28'},
            {id:'003',name: 'C', age:'29'}
        ],
        showPerson: false
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
        const person = [...this.state.person];
        person.splice(personIndex,1);
        this.setState({person: person})
    }

    togglePersonHandler = () => {
        const doesShown = this.state.showPerson;
        this.setState({showPerson: !doesShown});
    }

    render() {

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
                    <Cockpit length={this.state.person.length} showPerson={this.state.showPerson} toggle={this.togglePersonHandler}/>
                    {person}
                </div>
            </StyleRoot>

        );
    }

}


export default Radium(App);
