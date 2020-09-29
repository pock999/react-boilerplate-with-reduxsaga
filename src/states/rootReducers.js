import { useHistory } from "react-router-dom";
import { combineReducers } from 'redux';

import {
  AlertState
} from './reducers';

export default combineReducers({
  AlertState,
});
