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
    ADDTRUCK_START,
    ADDTRUCK_SUCCESS,
    ADDTRUCK_FAIL,
    DELETE_TRUCK_START,
    DELETE_TRUCK_SUCCESS,
    DELETE_TRUCK_FAIL,
} from '../actions'


const initialState = {
    isLoggedIn: false,
    isLoading: false,
    addSuccess: false,
    role: '',
    username: '',
    operatorId: '',
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
                role: action.payload.type,
                operatorId: action.payload.operator.operatorId,
                username: action.payload.operator.username,
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
        case ADDTRUCK_START:
            return {
                ...state,
                isLoading: true
            }
        case ADDTRUCK_SUCCESS:
            return {
                ...state,
                isLoading: false,
                addSuccess: true,
                error: ''
            }
        case ADDTRUCK_FAIL:
            return {
                ...state,
                isLoading: false,
                addSuccess: false,
                error: action.payload
            }
        case DELETE_TRUCK_START:
            return {
                ...state,
                isLoading: true
            }
        case DELETE_TRUCK_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: ''
            }
        case DELETE_TRUCK_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        default:
            return state;
    }
};

