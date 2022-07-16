import { getAuthUserInfo } from "./auth_reduser";

const SET__INITIALIZATION = "SET__INITIALIZATION";

const initalState = {
  isInializtate: false,
};

export const app = (state = initalState, action) => {
  switch (action.type) {
    case SET__INITIALIZATION:
      return { ...state, isInializtate: true };

    default:
      return state;
  }
};

//thuncks
export const initializationApp = () => async (dispatch) => {
  await dispatch(getAuthUserInfo());
  dispatch(setInitialization());
};

//AC
export const setInitialization = () => {
  return {
    type: SET__INITIALIZATION,
  };
};
