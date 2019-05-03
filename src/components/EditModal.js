import React from 'react';
import Modal from 'react-responsive-modal';
import { connect } from 'react-redux';
import { closeEditModal, updateTask } from '../actions/taskAction';

class EditModal extends React.Component {
 
  onCloseModal = () => {
    this.props.closeEditModal();
  }

  editTask = () => {
    let editTaskObj = {
      title: document.getElementById('txtEditTitle').value,
      description: document.getElementById('txtEditDesc').value,
      uuid: document.getElementById('txtId').value
    };
    this.props.updateTask(editTaskObj);
  };
 
  render() {
    return (
      <div>
        <Modal open={this.props.editModalOpen} onClose={this.onCloseModal} center>
          <h2>Edit Task</h2>
          <div className={"form-group"}>
            <div className={"col-sm-12"}>
              <input className={'form-control'} id='txtEditTitle' defaultValue={this.props.editRecord[0].title} placeholder={'Title'} type={'text'} />
            </div><br />
            <div className={"col-sm-12"}>
              <input className={'form-control'} id='txtEditDesc' defaultValue={this.props.editRecord[0].description} placeholder={'Description'} type={'text'} />
            </div><br />
            <input type='hidden' id='txtId' defaultValue={this.props.editRecord[0].uuid} />
            <div className={"col-sm-4"}>
              <button className={'btn btn-info'} onClick={this.editTask}>Edit Task</button>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { editModalOpen: state.editModalOpen, editRecord: state.editRecord };
};

const mapActionToProps = ({
  closeEditModal, updateTask
});

export default connect(mapStateToProps, mapActionToProps)(EditModal);
