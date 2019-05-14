import {all} from 'redux-saga/effects';
import {watchGetUser} from "../screens/User/User.Saga";
import {watchGetFollower} from "../screens/Follower/Follower.Saga";


export default function* rootSaga() {
    yield all([
        watchGetUser(),
        watchGetFollower()
    ])
}
