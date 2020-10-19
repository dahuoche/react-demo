import React, {Component} from 'react';
import './App.css';
import Todo from "./todo";

class App extends Component {

    state = {
        todoList: [],
        currentInput: ''
    }

  AddClickHandler = () => {
        if(this.state.currentInput !== '') {
            const todoList = this.state.todoList;
            todoList.push({
                id: todoList.length,
                title: this.state.currentInput
            })
            this.setState({
                todoList: todoList,
                currentInput: ''
            });
            console.log(this.state.todoList);
        }else {
            console.log("invalid input");
        }

  }

  DeleteHandler = (i) => {
      let todoList = this.state.todoList;
      todoList.splice(i,1)
      todoList = todoList.map((todo,index) => {
          console.log({id: index, title: todo.title});
          return {id: index, title: todo.title};
      });
      this.setState({
          todoList: todoList
      })
  }

  InputChangeHandler = (event) => {
      this.setState({
          currentInput: event.target.value
      });
  }

  render() {
    const todoList = (
        <div>
            {
                this.state.todoList.map((todo, index) => {
                    return <Todo id={todo.id + 1} title={todo.title} key={todo.id}
                                 click={() => this.DeleteHandler(index)}>

                    </Todo>
                })
            }
        </div>
    )


    return (
        <div className="App">
          <input type="text"
                 onChange={(event) => {this.InputChangeHandler(event)}}
                 value={this.state.currentInput}/>
            <button onClick={() => this.AddClickHandler()}>Add </button>
            {todoList}
        </div>
    );
  }
}

export default App;
