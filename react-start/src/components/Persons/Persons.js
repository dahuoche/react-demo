import React from "react";
import Person from "./Person/Person";

const Persons = (props) => {
    return (
            props.persons.map((p,index) => {
                return <Person name={p.name} age={p.age}
                               click={() => props.click(index)}
                               key={p.id}
                               change={(event) => props.change(event,p.id)}
                >
                    hobby: racing
                </Person>
            })

    );
}
export default Persons;
