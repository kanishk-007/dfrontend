import { FETCH_MESSAGE, FETCH_DATA_ERROR, FETCH_DATA_SUCCESS, FETCH_DATA_START, FETCH_TOKEN_SUCCESS, FETCH_TOKEN_GENERATE, LOGOUT, FETCH_USER_GENERATE } from "./type";

export const fetchStart = () => {
  return {
    type: FETCH_DATA_START
  }
}
export const fetchData = (payload) => {
  return {
    type: FETCH_DATA_SUCCESS,
    payload: payload
  }
}
export const fetchTokenSuccess = (payload) => {
  return {
    type: FETCH_TOKEN_SUCCESS,
    payload: payload
  }
}
export const fetchTokenGeneration = (payload) => {
  return {
    type: FETCH_TOKEN_GENERATE,
    payload: payload
  }
}
export const fetchUserSignup = (payload) => {
  console.log(payload,"nikhil")
  return {
    type: FETCH_USER_GENERATE,
    payload: payload
  }
}

export const fetchError = (payload) => {
  return {
    type: FETCH_DATA_ERROR,
    payload: payload
  }
}

export const logout = () => {
  return {
    type: LOGOUT
  };
};

export const fetchMessage = (payload) => {
  return {
    type: FETCH_MESSAGE,
    payload: payload
  }
}
