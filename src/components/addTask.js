import React, { Component } from 'react';

class AddTask extends Component {
  constructor(props) {
    super(props);
    this.saveTask = this.saveTask.bind(this);
  }

  saveTask(e){
    let newTaskObj = {
      title: document.getElementById('txtTitle').value,
      description: document.getElementById('txtDesc').value,
      uuid: new Date().valueOf()
    };
    this.props.saveTask(newTaskObj);
    document.getElementById('txtTitle').value = '';
    document.getElementById('txtDesc').value = '';
  }

  render() {
    return (
      <div className="card">
        <div className="card-header">
          Add Task
        </div>
        <div className="card-body">
          <div className={"form-group"}>
            <div className={"col-sm-3 float-left"}>
              <input className={'form-control'} id='txtTitle' placeholder={'Title'} type={'text'} />
            </div>
            <div className={"col-sm-5 float-left"}>
              <input className={'form-control'} id='txtDesc' placeholder={'Description'} type={'text'} />
            </div>
            <div className={"col-sm-4 float-left"}>
              <button className={'btn btn-info'} onClick={this.saveTask}>Add Task</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddTask;
