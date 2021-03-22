import { Component } from "react";
import "./styles.css";
//Components
import FormTask from "./components/tasks/FormTask";
import Tasks from "./components/tasks/Tasks";
import tasks from "./samples/tasks.json";
export default class App extends Component {
  state = {
    tasks: tasks
  };
  addTask = (tile, description) => {
    const newTask = {
      title: tile,
      description: description,
      id: this.state.tasks.length
    };
    this.setState({
      tasks: [...this.state.tasks, newTask]
    });
  };
  deleteTask = (id) => {
    const newTasks = this.state.tasks.filter((task) => task.id !== id);
    this.setState({
      tasks: newTasks
    });
  };
  checkDone = (id) => {
    const newTaks = this.state.tasks.map((task) => {
      if (task.id === id) {
        task.done = !task.done;
      }
      return task;
    });
    this.setState({
      task: newTaks
    });
  };
  render() {
    return (
      <div className="App">
        <h1>Tasks App</h1>
        <h3>First app with React</h3>
        <FormTask addTask={this.addTask} />
        <Tasks
          tasks={this.state.tasks}
          deleteTask={this.deleteTask}
          checkDone={this.checkDone}
        />
      </div>
    );
  }
}
