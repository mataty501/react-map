import { MARK, UNMARK } from "../Actions/actions";

const initialStateMark = { marked: [] };
let newState;


const counterReducer = (state = initialStateMark, action) => {
    switch (action.type) {
        case MARK:


            return { marked: [...state.marked, action.payload] }
        case UNMARK:
            //newState = [...state.marked]
            newState = state.marked.filter((elem) => elem.id !== action.payload.id)
            return { marked: [...newState] }
        default:
            return state;
    }
};

export default counterReducer; 