const initState = {};

const Test = (state = initState, action) => {
  const payload = action.payload;
  switch(action.type) {
    case "HANDLE_TEST":
      console.log('HANDLE_TEST');
      console.log(payload);
      return payload;
    case "CLEAR_TEST":
      // clear
      return initState;
    default:
      return state;
  }
};

export default Test;
