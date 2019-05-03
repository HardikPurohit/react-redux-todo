import React, { Component } from 'react';
import Item from './Item';

class List extends Component {
  render () {
    var todos = this.props.searchTriggered ? this.props.searchResult : this.props.todos;
    return (
      todos.map((task, index) => {
        return (
          <Item deleteTask={this.props.deleteTask} task={task} editTask={this.props.editTask} key={index} />
        )
      })
    );
  }
}

export default List;
