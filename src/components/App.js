import React, { Component } from "react";
import Header from "./Header";
import AddTask from './addTask';
import ListContainer from './listContainer';
import { connect } from 'react-redux';
import { createTask, deleteTask, updateTask, setSearchText, setEditRecord } from '../actions/taskAction';

class App extends Component {
  saveTask = (newTaskObj) => {
    this.props.createTask(newTaskObj);
  }

  deleteTask = (id) => {
    this.props.deleteTask(id);
  }

  onSearchTextChanges = (e) => {
    this.props.setSearchText(e.target.value);
  };

  onEditClick = (id) => {
    this.props.setEditRecord(id);
  };

  render() {
    return (
      <div>
        <Header /> <br />
        <div className='container'>
          <AddTask saveTask={this.saveTask} /> <br />
          <input type='text' id={'txtSearch'}
              className='form-control form-control-lg'
              placeholder='Search'
              onChange={this.onSearchTextChanges} /><br />
          <ListContainer todos={this.props.todos} searchResult={this.props.searchResult} searchTriggered={this.props.searchTriggered} deleteTask={this.deleteTask} editTask={this.onEditClick} />
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return { todos: state.todos, searchResult: state.searchResult, searchTriggered: state.searchTriggered, editModalOpen: state.editModalOpen };
};

const mapActionToProps = ({
  createTask, deleteTask, updateTask, setSearchText, setEditRecord
});

export default connect(mapStateToProps, mapActionToProps)(App);
