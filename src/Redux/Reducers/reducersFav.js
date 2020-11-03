import { FAV, UNFAV } from "../Actions/actions";


const initialStateFav = { favorite: [] };
let newState;
let index;

const counterReducer = (state = initialStateFav, action) => {
    switch (action.type) {
        case FAV:

        case UNFAV:
            newState = [...state.todo]
            index = newState.findIndex((elem) => elem.id === action.payload.id)

            newState[index] = { ...newState[index], task: action.payload.task }
            return { todo: [...newState] }

        default:
            return state;
    }
};

export default counterReducer;