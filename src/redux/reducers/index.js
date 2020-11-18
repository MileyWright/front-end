//imported action states
import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    SIGNUP_START,
    SIGNUP_SUCCESS,
    SIGNUP_FAIL,
    REQUEST_START,
    REQUEST_SUCCESS,
    REQUEST_FAIL,
} from '../actions'

const initialState = {
    isLoggedIn: false,
    isLoading: false,
    username: '',
    error: '',
    data: []
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case LOGIN_START:
            return {
                ...state,
                isLoading: true
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isLoggedIn: true,
                username: action.payload.username,
                error: ''
            }
        case LOGIN_FAIL:
            return {
                ...state,
                isLoading: false,
                isLoggedIn: false,
                username: '',
                error: action.payload
            }
        case SIGNUP_START:
            return {
                ...state,
                isLoading: true
            }
        case SIGNUP_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: ''
            }
        case SIGNUP_FAIL:
            return {
                ...state,
                isLoading: false,
                isLoggedIn: false,
                error: action.payload
            }
        case REQUEST_START:
            return {
                ...state,
                isLoading: true
            }
        case REQUEST_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: '',
                data: action.payload
            }
        case REQUEST_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        default:
            return state;
    }
};

