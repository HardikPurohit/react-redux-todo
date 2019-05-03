import React, { Component } from 'react';
import List from './List';
import EditModal from './EditModal';

class ListContainer extends Component {
  render () {
    return (
      <div>
        <div className="card">
          <div className="card-header">Tasks</div>
          <div className="card-body">
            <ul className="list-group">
              <li className="list-group-item active col-sm-12">
                <div className='col-sm-3 float-left'>
                  Title
                </div>
                <div className='col-sm-7 float-left'>
                  Description
                </div>
                <div className="col-sm-2 float-left">
                  Actions
                </div>
              </li>
              <List todos={this.props.todos} searchResult={this.props.searchResult} searchTriggered={this.props.searchTriggered} deleteTask={this.props.deleteTask} editTask={this.props.editTask} />
            </ul>
          </div>
        </div>
        <EditModal />
      </div>
    );
  }
}

export default ListContainer;
