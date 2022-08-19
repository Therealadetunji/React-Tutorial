import React, { PureComponent } from "react";
import TodoList from "./todo-lists";
import Header from "./header";
import InputTodo from "./Input-todo";
import { v4 as uuidv4 } from "uuid";
class TodoContainer extends PureComponent {
        state = {
            todoList: [ {
            id: uuidv4(),
            title: 'sweeping',
            completed: true
            
            },

            {
            id: uuidv4(),
            title: 'bathing',
            completed: false
        
            },

            {
                id: uuidv4(),
                title: 'Eating',
                completed: false
    
            } ]
        };

        handleChange = id => {
            this.setState(prevState =>({
          todoList: prevState.todoList.map(todo => {
            if (todo.id === id) {
              return {
                ...todo, completed: !todo.completed
              }
            }
            return todo;
          })
            }));
        };


      deleteTodo = id => {
       this.setState({
        todoList: [
            ...this.state.todoList.filter(todo =>{
                return todo.id !== id;
            })
        ]
       })
      };

      addTodoItem = title => {
        const newTodo = {
          id: uuidv4(),
          title: title,
          completed: false
        };
        this.setState({
          todoList: [...this.state.todoList, newTodo]
        });
      }; 


      setUpdate = (updatedTitle, id) => {
            this.setState({
            todoList: this.state.todoList.map(
                todo => {
                    if (todo.id === id){
                        todo.title = updatedTitle
                    }
                    return todo
                }),
            })
        };


        render(){
            return (
                <div className='container'>
                <div className='inner'>
                <InputTodo addTodoProps={this.addTodoItem} />
                <Header/>
                <TodoList todoList={this.state.todoList} handleChange={this.handleChange} deleteTodo = {this.deleteTodo} setUpdate={this.setUpdate}/>
                </div>
                </div>
            );
        }
};

export default TodoContainer;