// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js


import React from "react";
import Item from "./Todo";
// import TodoForm from "./TodoForm";


const TodoList = props => {

return (
    <div>
        
        {props.tasks.map(item => (
        <Item key={item.id} item={item} 
        toggleComplete={props.toggleComplete} />
        ))}
        {/* <button onClick={props.removeButton}>Clear Completed </button> */}



    </div>
    
    );

}

export default TodoList