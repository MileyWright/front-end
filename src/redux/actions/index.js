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




//Log in action
export const logIn = (signInInfo) => dispatch => {
    dispatch({ type: LOGIN_START });
    //https://bw-food-truck.herokuapp.com/api/auth/login
    axiosWithAuth().post('https://cors-anywhere.herokuapp.com/https://food-truck-trackr-sc.herokuapp.com//api/auth/login', signInInfo)
        .then(res => {
            console.log(res);
            dispatch({ type: LOGIN_SUCCESS, payload: res });
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: LOGIN_FAIL, payload: err });
        });
};

//Sign up action
export const signUpDiner = (dinerObj) => dispatch => {
    dispatch({ type: SIGNUP_START });
    //https://bw-food-truck.herokuapp.com/api/auth/register 
    axios.post('https://cors-anywhere.herokuapp.com/https://food-truck-trackr-sc.herokuapp.com/api/auth/register/diners', dinerObj) 
        .then(res => {
            console.log(res);
            dispatch({ type: SIGNUP_SUCCESS, payload: res });
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: SIGNUP_FAIL, payload: err });
        });
};

//Sign up action
export const signUpOperator = (operatorObj) => dispatch => {
    dispatch({ type: SIGNUP_START });
    //https://bw-food-truck.herokuapp.com/api/auth/register
    axios.post('https://cors-anywhere.herokuapp.com/https://food-truck-trackr-sc.herokuapp.com/api/auth/register/operators', operatorObj)
        .then(res => {
            console.log(res);
            dispatch({ type: SIGNUP_SUCCESS, payload: res });
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: SIGNUP_FAIL, payload: err });
        });
};


//Get info action
export const getInfo = () => dispatch => {
    dispatch({ type: REQUEST_START });

    axiosWithAuth.get('')
        .then(res => {
            console.log(res);
            dispatch({ type: REQUEST_SUCCESS, payload: res });
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: REQUEST_FAIL, payload: err });
        });
};