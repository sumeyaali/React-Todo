import React from "react";


class TodoForm extends React.Component {
    constructor() {
        super();
        this.state={
            newTask: "",
        };
    }


handleChanges = e => {
    this.setState({newTask: e.target.value})
};


addButton = e => {
    e.preventDefault();
    this.props.addTask(this.state.newTask)
    this.setState({newTask: " "})
};

removeButton = e => {
    e.preventDefault();
    this.props.removeItems(this.state.tasks)

}





render(){
    return(
        <form>
            <input
            type="text"
            name="item"
            value={this.state.newTask}
            onChange={this.handleChanges}
            />
            <button onClick={this.addButton}>Add Todo </button>
            <button onClick={this.removeButton}>Clear Completed </button>
            
        </form>
    );
}


}

export default TodoForm; 