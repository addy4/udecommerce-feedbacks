// creating action creator here

import axios from 'axios';
import { FETCH_USER } from './types';

export const fetchUser = () => async (dispatch) => {
    console.log("Test");
    const res = await axios.get('/api/loggedin_user');
    dispatch({ type: FETCH_USER, payload: res });
}