import { useHistory } from "react-router-dom";
import { combineReducers } from 'redux';

import {
  AlertState,
  Test,
} from './reducers';

export default combineReducers({
  AlertState,
  Test,
});
