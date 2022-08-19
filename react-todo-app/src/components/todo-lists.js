import { PureComponent } from "react";
import TodoItem from "./todo-Item";
class TodoList extends PureComponent {
    render(){
        return (
            <ul>
                {this.props.todoList.map(todo => (
                    <TodoItem key={todo.id} todo={todo} handleChange={this.props.handleChange} deleteTodo={this.props.deleteTodo} setUpdate={this.props.setUpdate} />
                ))}
            </ul>
        )
    }
}

export default TodoList;