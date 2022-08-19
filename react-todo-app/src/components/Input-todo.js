import { PureComponent } from "react"

class InputTodo extends PureComponent {
    state = {
        title: ""
    };

onChange = e => {
        this.setState({
          [e.target.name]: e.target.value
        });
      };

      handleSubmit = e => {
        e.preventDefault();
        if (this.state.title.trim()){
            this.props.addTodoProps(this.state.title);
        this.setState({
            title:''
        })
        }else {
            alert('please add an activity to the list')
        }
        
      };
    render() {
        return(
            <form onSubmit={this.handleSubmit} className="form-container">
                <input onChange = {this.onChange} type='text' placeholder='Add new activity' value={this.state.title} name='title' className="input-text"/>
                <button className="input-submit">Submit</button>
            </form>
        )
    }
}

export default InputTodo;