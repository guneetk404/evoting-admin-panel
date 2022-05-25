import { RESET_STATE, SET_CONTESTANT_DATA, SET_ELECTION_DATA, SET_ELECTION_RESULT, SET_ELECTION_RESULT_DATA, SET_VOTER_DATA } from "../actions/votingTypes";

const initialState = {
    contestants: {

    },
    elections: {

    },
    electionresults: {

    },
    votes: {

    },
    voter:{

    },
}

export default function Admission(state = initialState, action) {
    if (action.type === SET_CONTESTANT_DATA) {
        return {
            ...state,
            contestants: action.payload
        }
    }
    if (action.type === RESET_STATE) {
        return initialState
    }
    if (action.type === SET_ELECTION_DATA) {
        return {
            ...state,
            elections: action.payload
        }
    }
    if (action.type === SET_ELECTION_RESULT) {
        return {
            ...state,
            electionresults: action.payload
        }
    }
    if (action.type === SET_ELECTION_RESULT_DATA) {
        return {
            ...state,
            votes: action.payload
        }
    }
    if(action.type === SET_VOTER_DATA){
        return{
            ...state,
            voter: action.payload
        }
    }
    return state;
}