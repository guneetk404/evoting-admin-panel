import { BUTTON_LOADING_ACTION, LOGIN_FAILED_ACTION, LOGIN_SUCCESS_ACTION, LOGOUT_ACTION, SET_SUCCESS_MESSAGE } from "../actions/authTypes";


const initialState = {
    auth: {
        'token': null,
    },
    errorMessage: '',
    successMessage: '',
    isAuthenticated: false,
    buttonloading: false,
    otpsent: false,
}

export default function UserAuth(state = initialState, action) {


    if (action.type === LOGIN_SUCCESS_ACTION) {
        return {
            ...state,
            auth: action.payload,
            errorMessage: '',
            successMessage: 'Login Successful',
            buttonloading: false,
            otpsent: false,
            isAuthenticated: true,
        }
    }
    if (action.type === LOGIN_FAILED_ACTION) {
        return {
            ...state,
            errorMessage: action.payload,
            successMessage: '',
            buttonloading: false,
        }
    }

    if (action.type === LOGOUT_ACTION) {
        return initialState
    }
    if (action.type === BUTTON_LOADING_ACTION) {
        return {
            ...state,
            buttonloading: action.payload,
            errorMessage: '',
            successMessage: '',
        }
    }
    if(action.type === SET_SUCCESS_MESSAGE){
        return {
            ...state,
            successMessage: action.payload,
        }
    }
    return state;
}
