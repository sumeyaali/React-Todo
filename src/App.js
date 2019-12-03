import React from 'react';
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      tasks:[], 
         
    }
  }

  addTask = newTaskText => {

    const newTask = {
      task: newTaskText,
      id: Date.now(),
      completed: false,
    }

    this.setState({
      tasks: [...this.state.tasks, newTask]
    })


  }

  toggleComplete = itemId => {
    const tasks = this.state.tasks.map(task => {
      if (task.id === itemId) {
        task.completed = !task.completed
      }
      return task
    });
    this.setState({tasks, task: ""})
  }

  removeItems = () => {
    
    this.setState(prevState => {
      return {
        tasks: prevState.tasks.filter(task => {
          return !task.completed;
        })
      }
    })
  }
 
  render() {
    return (
      <div>

        <div> 
        <h2>Welcome to Sumeya's To-Do App!</h2>
        {/* Why doesnt TodoForm doesnt have a this.state */}
          <TodoForm addTask={this.addTask}
          removeItems={this.removeItems}
          />
        </div>
        
          <TodoList tasks={this.state.tasks}
          toggleComplete={this.toggleComplete}
          />
          
        </div>
      
    );
  }
}

export default App;
