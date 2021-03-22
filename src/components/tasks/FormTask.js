import { Component } from "react";

export default class FormTask extends Component {
  state = {
    title: "",
    description: ""
  };
  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTask(this.state.title, this.state.description);
  };
  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        Task
        <br />
        <input
          name="title"
          placeholder="Write a task"
          onChange={this.onChange}
          value={this.state.title}
        />
        <br />
        Description
        <br />
        <textarea
          name="description"
          placeholder="Write a description"
          onChange={this.onChange}
          value={this.state.description}
        ></textarea>
        <br />
        <input type="submit" value="Add Task" />
      </form>
    );
  }
}
