import { FETCH_USER } from "../actions/types";

/*
export default function (state = {}, action) {

    switch (action.type) {
        case FETCH_USER:
            return action.payload || false
        default:
            return state;
    }
}
*/

function authReducer(state = null, action) {
    switch (action.type) {
        case FETCH_USER:
            return action.payload || false;
        default:
            return state;
    }
}

export default authReducer;

// above block is called multiple times
// when no user logged in, 
// action.type = FETCH_USER
// action.payload = ""
// Hence, "" || false = false. false returned by line 7
// when request isn't yet made,
// case is default, {} returned as state
// when user logged in
// action.type = FETCH_USER and action.payload = IDs
// Hence, line 7 returns action.payload