import UserAuth from "./authReducer";
import Voting from "./votingReducer";
import { combineReducers } from "redux";


const reducers = combineReducers({
    auth:UserAuth,
    vote:Voting
});

export default reducers;