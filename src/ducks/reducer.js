const initialState = {
  id: 0,
  username: "",
  profile_pic: ""
};

const UPDATE_USER = "UPDATE_USER";
const CLEAR_USER = "CLEAR_USER";

export function updateUser(user) {
  return {
    type: UPDATE_USER,
    payload: user
  };
}

export function clearUser() {
  return {
    type: CLEAR_USER
  };
}

export default function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case UPDATE_USER:
      const { id, username, profile_pic } = payload;
      return { ...state, id, username, profile_pic };
    case CLEAR_USER:
      return { ...state, id: 0, username: "", profile_pic: "" };
    default:
      return state;
  }
}
