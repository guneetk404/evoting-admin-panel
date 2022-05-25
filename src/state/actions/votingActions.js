import { createprofile, deleteprofile, electionresults, electionresultslist, searchprofile, updateprofile } from "../../services/VotingService";
import { buttonLoadingAction, loginFailedAction, setSuccessMessage } from "./authActions";
import { RESET_STATE, SET_CONTESTANT_DATA, SET_ELECTION_DATA, SET_ELECTION_RESULT, SET_ELECTION_RESULT_DATA, SET_VOTER_DATA } from "./votingTypes";


export function electionresultsLoadAction() {
    return (dispatch) => {
        electionresultslist().then(response => {
            dispatch(setelectionresult(response.data));
        })
            .catch(error => {
                if (error.response === undefined) {
                    dispatch(loginFailedAction('Make Sure You Are Connected To Internet'));
                    dispatch(buttonLoadingAction(false));
                }
                else if (error.response.status === 500) {
                    dispatch(loginFailedAction('Something Went Wrong'));
                    dispatch(buttonLoadingAction(false));
                } else {
                    dispatch(loginFailedAction(error.response.data.error));
                    dispatch(buttonLoadingAction(false));
                }
            })
    }
}

export function electionresultsAction(election) {
    return (dispatch) => {
        electionresults(election).then(response => {
            dispatch(setelectionresultdata(response.data));
        })
            .catch(error => {
                if (error.response === undefined) {
                    dispatch(loginFailedAction('Make Sure You Are Connected To Internet'));
                    dispatch(buttonLoadingAction(false));
                }
                else if (error.response.status === 500) {
                    dispatch(loginFailedAction('Something Went Wrong'));
                    dispatch(buttonLoadingAction(false));
                } else {
                    dispatch(loginFailedAction(error.response.data.error));
                    dispatch(buttonLoadingAction(false));
                }
            })
    }
}

export function ProfilecreateAction(user) {
    return (dispatch) => {
        createprofile(user).then(response => {
            dispatch(setSuccessMessage("Voter Created"));
            dispatch(buttonLoadingAction(false));
        })
            .catch(error => {
                if (error.response === undefined) {
                    dispatch(loginFailedAction('Make Sure You Are Connected To Internet'));
                    dispatch(buttonLoadingAction(false));
                }
                else if (error.response.status === 500) {
                    dispatch(loginFailedAction('Something Went Wrong'));
                    dispatch(buttonLoadingAction(false));
                } else {
                    dispatch(loginFailedAction(error.response.data.error));
                    dispatch(buttonLoadingAction(false));
                }
            })
    }
}

export function ProfileupdateAction(user) {
    return (dispatch) => {
        updateprofile(user).then(response => {
            dispatch(setSuccessMessage("Voter Updated"));
            dispatch(buttonLoadingAction(false));
        })
            .catch(error => {
                if (error.response === undefined) {
                    dispatch(loginFailedAction('Make Sure You Are Connected To Internet'));
                    dispatch(buttonLoadingAction(false));
                }
                else if (error.response.status === 500) {
                    dispatch(loginFailedAction('Something Went Wrong'));
                    dispatch(buttonLoadingAction(false));
                } else {
                    dispatch(loginFailedAction(error.response.data.error));
                    dispatch(buttonLoadingAction(false));
                }
            })
    }
}

export function ProfiledeleteAction(user) {
    console.log(user);
    return (dispatch) => {
        deleteprofile(user).then(response => {
            dispatch(setSuccessMessage("Voter Deleted"));
            dispatch(buttonLoadingAction(false));
        })
            .catch(error => {
                if (error.response === undefined) {
                    dispatch(loginFailedAction('Make Sure You Are Connected To Internet'));
                    dispatch(buttonLoadingAction(false));
                }
                else if (error.response.status === 500) {
                    dispatch(loginFailedAction('Something Went Wrong'));
                    dispatch(buttonLoadingAction(false));
                } else {
                    dispatch(loginFailedAction(error.response.data.error));
                    dispatch(buttonLoadingAction(false));
                }
            })
    }
}

export function profileSearchAction(search) {
    return (dispatch) => {
        searchprofile(search).then(response => {
            dispatch(setprofileData(response.data));
            dispatch(buttonLoadingAction(false));
        })
            .catch(error => {
                if (error.response === undefined) {
                    dispatch(loginFailedAction('Make Sure You Are Connected To Internet'));
                    dispatch(buttonLoadingAction(false));
                }
                else if (error.response.status === 500) {
                    dispatch(loginFailedAction('Something Went Wrong'));
                    dispatch(buttonLoadingAction(false));
                } else {
                    dispatch(loginFailedAction(error.response.data.error));
                    dispatch(buttonLoadingAction(false));
                }
            })
    }
}

export function setcontestantdata(contestant) {
    return {
        type: SET_CONTESTANT_DATA,
        payload: contestant
    }
}

export function setelectiondata(elections) {
    return {
        type: SET_ELECTION_DATA,
        payload: elections
    }
}
export function setelectionresult(elections) {
    return {
        type: SET_ELECTION_RESULT,
        payload: elections
    }
}

export function setelectionresultdata(votes) {
    return {
        type: SET_ELECTION_RESULT_DATA,
        payload: votes
    }
}


export function resetState() {
    return {
        type: RESET_STATE
    }
}

export function setprofileData(profile) {
    return {
        type: SET_VOTER_DATA,
        payload: profile
    }
}