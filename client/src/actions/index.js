// creating action creator here

import axios from 'axios';
import { FETCH_USER } from './types';

export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/loggedin_user');
    dispatch({ type: FETCH_USER, payload: res.data });
}

// above is invoked only once when all DOM is mounted/render is complete

export const handleToken = (token) => async dispatch => {
    const res = axios.post('/api/stripe_payment', token);
    dispatch({ type: FETCH_USER, payload: res.data });
}