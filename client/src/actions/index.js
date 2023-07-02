// creating action creator here

import axios from 'axios';
import { FETCH_USER } from './types';

export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/loggedin_user');
    console.log(res);
    dispatch({ type: FETCH_USER, payload: res.data });
};

export const handleToken = token => async dispatch => {
    const res = await axios.post('/api/stripe_payment', token);
    console.log(res);
    dispatch({ type: FETCH_USER, payload: res.data });
};