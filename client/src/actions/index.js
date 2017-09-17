
import axios from 'axios';
const ROOT_URL = 'http://localhost:4000';
import {browserHistory } from 'react-router';
import { AUTH_USER,
        UNAUTH_USER,
        AUTH_ERROR } from './types'


export function signinUser({ email, password }){
    return function(dispatch){
    
    
    //submit email/pass to the server
    axios.post(`${ROOT_URL}/auth/signin`,{email,password})
        .then(res => {
            //if request is good update state
            //- update state to indivate user is authenticaed 
            dispatch({type: AUTH_USER});
            //-save the jwt token
            localStorage.setItem('token',res.data.token);
            // -redirect to the route /feature
            browserHistory.push('/feature')
        })
        .catch(()=>{
    //if request is bad
    //-show error to the user
            dispatch(authError('Bad login info'));
        });
    }
}

export function authError(error) {
    return {
        type: AUTH_ERROR,
        payload: error
    };
} 

export function signoutUser(){
    localStorage.removeItem('token');
    return { type: UNAUTH_USER}

}