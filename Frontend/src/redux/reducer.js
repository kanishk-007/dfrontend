import { FETCH_DATA_SUCCESS, FETCH_MESSAGE, FETCH_DATA_ERROR, FETCH_DATA_START, FETCH_TOKEN_SUCCESS, LOGOUT } from "./type"

const initialState = {
  data: [],
  isLoading: false,
  error: '',
  accessToken: '',
  message: ''
}

export const reducer = (state = initialState, action = {}) => {

  switch (action.type) {
    case FETCH_DATA_START:
      return {
        ...state,
        isLoading: true,
      }
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
        error: ''
      }
    case FETCH_DATA_ERROR:
      return {
        ...state,
        isLoading: false,
        data: [],
        error: "Error in fetching data",
        message: action.payload
      }
    case FETCH_TOKEN_SUCCESS:
      return {
        ...state,
        accessToken: action.payload.data.token,
        error: ""
      }
    case LOGOUT:
      return {
        ...state,
        data: [],
        isLoading: false,
        error: '',
        accessToken: '',
        message: ''
      };
    case FETCH_MESSAGE: {
      return {
        ...state,
        message: action.payload,
        error: ""
      }
    }
    default:
      return state;
  }

}