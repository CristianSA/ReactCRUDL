import { Component } from "react";

export default class Task extends Component {
  StyleCompeted() {
    return {
      fontSize: "20px",
      color: this.props.task.done ? "grey" : "black",
      textDecoration: this.props.task.done ? "line-through" : "none"
    };
  }
  render() {
    const { task } = this.props;
    return (
      <div className="card">
        <div className="container">
          <p style={this.StyleCompeted()}>
            <div>
              <h5>Title:</h5>
              <p>{task.title}</p>
            </div>
            <div>
              <h5>Description:</h5>
              <p>{task.description}</p>
            </div>
            <input
              type="checkbox"
              onChange={this.props.checkDone.bind(this, task.id)}
            />
            <button
              style={btnDelete}
              onClick={this.props.deleteTask.bind(this, task.id)}
            >
              x
            </button>
          </p>
        </div>
      </div>
    );
  }
}
const btnDelete = {
  fontSize: "16px",
  background: "#ea2027",
  color: "#fff",
  border: "none",
  padding: "15px 32px",
  width: "100%",
  cursor: "pointer",
  display: "inline-block",
  textDecoration: "none",
  margin: "4px 2px"
};
