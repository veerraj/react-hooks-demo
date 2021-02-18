import * as actionTypes from "../types/types";

const initialState = {
  users: [],
  user: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CREATE_USER:
      return {
        ...state,
        users: state.users.concat(action.payload),
      };
    case actionTypes.UPDATE_USER:
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.payload.id ? action.payload : user
        ),
      };
    case actionTypes.DELETE_USER:
      console.log(action.id);
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.id),
      };
    case actionTypes.SET_USER:
      let setUser = state.users.filter((user) => user.id == action.id);
      setUser = setUser.length ? setUser.values() : null;
      if (setUser) {
        for (let data of setUser) {
          setUser = data;
        }
      }
      console.log(setUser, "after ");
      return {
        ...state,
        user: setUser,
      };
    default:
      return state;
  }
};

export default userReducer;
