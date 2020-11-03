import { combineReducers } from 'redux';
import marker from "./reducersMark";
import fav from "./reducersFav";

const reducer = combineReducers({
    fav: fav,
    marker: marker
})

export default reducer;