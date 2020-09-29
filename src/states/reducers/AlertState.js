const initState = {message: [], show: false};

const AlertState = (state = initState, action) => {
  const payload = action.payload;
  switch(action.type) {
    case "HANDLE_ALERT":
      // show / hide / other
      return payload;
    case "CLEAR_ALERT":
      // clear
      return initState;
    default:
      return state;
  }
};

export default AlertState;
