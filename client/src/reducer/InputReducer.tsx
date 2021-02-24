function InputReducer(state, action) {
  switch (action.type) {
    case "SET_INPUT":
      return action.value;
    case "CLEAR":
      return "";
    default:
      return state;
  }
}

export default InputReducer;
