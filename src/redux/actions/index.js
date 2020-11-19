import axios from 'axios';
import axiosWithAuth from '../../axios/axiosWithAuth';
export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const SIGNUP_START = 'SIGNUP_START';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAIL = 'SIGNUP_FAIL';
export const REQUEST_START = 'REQUEST_START';
export const REQUEST_SUCCESS = 'REQUEST_SUCCESS';
export const REQUEST_FAIL = 'REQUEST_FAIL';
export const ADDTRUCK_START = 'ADDTRUCK_START';
export const ADDTRUCK_SUCCESS = 'ADDTRUCK_SUCCESS';
export const ADDTRUCK_FAIL = 'ADDTRUCK_FAIL';



//Log in action
export const logIn = (signInInfo) => dispatch => {
    dispatch({ type: LOGIN_START });
    axios.post('https://food-truck-trackr-api.herokuapp.com/api/auth/login', signInInfo)
        .then(res => {
            console.log(res);
            localStorage.setItem('token', res.data.token);
            dispatch({ type: LOGIN_SUCCESS, payload: res.data });            
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: LOGIN_FAIL, payload: err });
        });
};

//Sign up action
export const signUpDiner = (dinerObj) => dispatch => {
    dispatch({ type: SIGNUP_START });
    axios.post('https://food-truck-trackr-api.herokuapp.com/api/auth/register/diner', dinerObj) 
        .then(res => {
            console.log(res);
            dispatch({ type: SIGNUP_SUCCESS, payload: res.data });
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: SIGNUP_FAIL, payload: err });
        });
};

//Sign up action
export const signUpOperator = (operatorObj) => dispatch => {
    dispatch({ type: SIGNUP_START });
    axios.post('https://food-truck-trackr-api.herokuapp.com/api/auth/register/operator', operatorObj)
        .then(res => {
            console.log(res);
            dispatch({ type: SIGNUP_SUCCESS, payload: res });
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: SIGNUP_FAIL, payload: err });
        });
};


//Get Truck Info action
export const getTruckInfo = () => dispatch => {
    dispatch({ type: REQUEST_START });

    axiosWithAuth().get('https://food-truck-trackr-api.herokuapp.com/api/trucks')
        .then(res => {
            console.log(res);
            dispatch({ type: REQUEST_SUCCESS, payload: res.data });
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: REQUEST_FAIL, payload: err });
        });
};

//Add Truck  action
export const addTruck = (truckObj) => dispatch => {
    dispatch({ type: ADDTRUCK_START });

    axiosWithAuth().post('https://food-truck-trackr-api.herokuapp.com/api/trucks', truckObj)
        .then(res => {
            console.log(res);
            dispatch({ type: ADDTRUCK_SUCCESS, payload: res.data });
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: ADDTRUCK_FAIL, payload: err });
        });
};