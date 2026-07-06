import { ADD_TASK, EDIT_TASK, TOGGLE_TASK } from "../actions/actionTypes";

const initialState = [];

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
    return [...state, action.payload];
    case EDIT_TASK:
    return state.map((task) =>
                     task.id === action.payload.id
                     ? { ...task, description: action.payload.description }
                     : task
                     );
    case TOGGLE_TASK:
    return state.map((task) =>
                     task.id === action.payload ? { ...task, isDone: !task.isDone } : task
                     );
    default:
    return state;
    }
  };

export default taskReducer;
