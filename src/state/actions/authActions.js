import { LOGIN_SUCCESS_ACTION, LOGIN_FAILED_ACTION, LOGOUT_ACTION, BUTTON_LOADING_ACTION, SET_SUCCESS_MESSAGE } from "./authTypes";
import { login } from '../../services/AuthService';

export function loginAction(user,navigate) {
    return (dispatch) => {
        login(user).then(response => {
            dispatch(loginSuccessAction(response.data));
            dispatch(buttonLoadingAction(false));
            navigate('/');
        })
            .catch(error => {
                if (error.response === undefined) {
                    dispatch(loginFailedAction('Make Sure You Are Connected To Internet'));
                    dispatch(buttonLoadingAction(false));
                }
                else if (error.response.status === 500) {
                    dispatch(loginFailedAction('Something Went Wrong'));
                    dispatch(buttonLoadingAction(false));
                } else {
                    dispatch(loginFailedAction(error.response.data.error));
                    dispatch(buttonLoadingAction(false));
                }
            })
    }
}


export function loginSuccessAction(user) {
    return {
        type: LOGIN_SUCCESS_ACTION,
        payload: user
    }
}

export function loginFailedAction(error) {
    return {
        type: LOGIN_FAILED_ACTION,
        payload: error
    }
}

export function logoutAction(navigate) {
    // eslint-disable-next-line
    return {
        type: LOGOUT_ACTION,
    }
}

export function buttonLoadingAction(data) {
    return {
        type: BUTTON_LOADING_ACTION,
        payload: data
    }
}

export function setSuccessMessage(data){
    return {
        type: SET_SUCCESS_MESSAGE,
        payload: data
    }
}