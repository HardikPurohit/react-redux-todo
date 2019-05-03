import { CREATE_TASK, EDIT_TASK, UPDATE_TASK, DELETE_TASK, SEARCH_TEXT_SET, CLOSE_MODAL } from '../actions/index';

const initialState = {
  todos: [{
    title: 'ABCD',
    description: 'abcdefghijklmnopqrstuvwxyz',
    uuid: new Date().valueOf()
  }],
  searchResult:[],
  searchTriggered: false,
  editModalOpen: false,
  editRecord: [{
    title: '',
    description: '',
    uuid: ''
  }]
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_TASK: {
      return Object.assign({}, state, { todos: [...state.todos, action.payload],
        searchResult:[],
        searchTriggered: false
      });
    }
    case DELETE_TASK: {
      return {
        ...state,
        todos: state.todos.filter(item => action.payload !== item.uuid),
        searchResult:[],
        searchTriggered: false
      }
    }
    case EDIT_TASK: {
      return Object.assign({}, state, {
        editRecord: state.todos.filter(item => action.payload === item.uuid),
        editModalOpen: true
      });
    }
    case UPDATE_TASK: {
      var updatedTodo = [];
      for(var i=0; i<state.todos.length; i++) {
        if (state.todos[i]['uuid'] == action.payload.uuid) {
          state.todos[i]['title'] = action.payload.title;
          state.todos[i]['description'] = action.payload.description;
        }
        updatedTodo.push(state.todos[i])          
      }
      return {
        ...state,
        todos: updatedTodo,
        searchResult:[],
        searchTriggered: false,
        editModalOpen: false
      }
    }
    case SEARCH_TEXT_SET : {
      state.searchResult = [];
      if (action.payload !== '') {
        for(i=0; i<state.todos.length; i++) {
          if (state.todos[i]["title"].toLocaleLowerCase().indexOf(action.payload) !== -1) {
            state.searchResult.push(state.todos[i]);
            state.searchTriggered = true;
          }
        }
      }
      else {
        state.searchTriggered = false;
      }
      return Object.assign({}, state, { todos: state.todos,
        searchResult:state.searchResult,
        searchTriggered: state.searchTriggered
      });
    }
    case CLOSE_MODAL : {
      return Object.assign({}, state, { 
        editModalOpen: false
      });
    }
    default:
      return state;
  }
};

export default rootReducer;