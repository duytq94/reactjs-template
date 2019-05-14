import {combineReducers} from 'redux'
import {CLEAR_NETWORK_FAIL, SEND_NETWORK_FAIL} from "./actions";
import {getUser} from "../screens/User/User.Reducer";
import {getFollower} from "../screens/Follower/Follower.Reducer";

const initialState = {fetching: false, data: null, err: null}

const sendNetworkFail = (state = initialState, action) => {
    switch (action.type) {
        case SEND_NETWORK_FAIL:
            return {
                err: action.payload.err
            }
        case CLEAR_NETWORK_FAIL:
            return {
                err: null
            }
        default:
            return state
    }
}

const rootReducer = combineReducers({sendNetworkFail, getUser, getFollower})
export default rootReducer
