import React, { Component } from 'react';

class Item extends Component {

  handleDelete = (id) => {
    this.props.deleteTask(id);
  }

  handleEdit = (id) => {
    this.props.editTask(id);
  }

  render () {
    const {title, description, uuid} = this.props.task;
    return (
      <li className="list-group-item col-sm-12" >
        <div className='col-sm-3 float-left'>
          { title }
        </div>
        <div className='col-sm-7 float-left'>
          { description }
        </div>
        <div className="row col-sm-2 float-left">
          <div className='col-sm-6'>
            <i className="fa fa-edit cursor-pointer" aria-hidden="true" title="Edit" onClick={(e)=>{this.handleEdit(uuid)}}></i>
          </div>
          <div className='col-sm-6'>
            <i className="fa fa-trash cursor-pointer" aria-hidden="true" title="Delete" onClick={(e)=>{this.handleDelete(uuid)}}></i>
          </div>
        </div>
      </li>
    )
  }
}

export default Item;
