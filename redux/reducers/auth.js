const initialState = {
  user: {
    firstname: "Joe",
    lastname: "Bosh",
    email: "joebosh@gmail.com",
    password: "joebosh",
  },
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "":
      break;

    default:
      return state;
  }
};
