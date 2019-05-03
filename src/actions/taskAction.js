import { CREATE_TASK, EDIT_TASK, UPDATE_TASK, DELETE_TASK, SEARCH_TEXT_SET, CLOSE_MODAL } from '../actions/index';

export const createTask = (request) => {
  return {
    type: CREATE_TASK,
    payload: request
  };
};

export const deleteTask = (id) => {
  return {
    type: DELETE_TASK,
    payload: id
  };
};

export const updateTask = (request) => {
  return {
    type: UPDATE_TASK,
    payload: request
  };
};

export const setSearchText = (str) => {
  return {
    type: SEARCH_TEXT_SET,
    payload: str
  };
};

export const setEditRecord = (id) => {
  return {
    type: EDIT_TASK,
    payload: id
  };
};

export const closeEditModal = () => {
  return {
    type: CLOSE_MODAL
  };
};
