let initialState = false;

function CommandReducer(state, action) {
  switch (action.type) {
    case "CHANGE_FLAG":
      return !initialState;
  }
}

export default CommandReducer;
