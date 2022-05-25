import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { authactionCreators, votingactionCreators } from '../state';
import Navbar from './Navbar'
import Profileform from './Profileform';

const UpdateProfile = () => {
  const buttonloading = useSelector(state => state.auth.buttonloading);
  const voter = useSelector(state => state.vote.voter);
  const dispatch = useDispatch();
  const { buttonLoadingAction } = bindActionCreators(authactionCreators, dispatch);
  const { profileSearchAction } = bindActionCreators(votingactionCreators, dispatch);
  const [aadhaar, setAadhaar] = useState();

  const onChangeData = (e) => {
    setAadhaar({ ...aadhaar, [e.target.name]: e.target.value })
  }
  const onSubmitsearch = (event) => {
    profileSearchAction(aadhaar)
    buttonLoadingAction(true)
  }
  let button = <button className="btn btn-outline-success mt-2" type="button" onClick={onSubmitsearch}>Search</button>
  if (buttonloading) {
    button =
      <button className="btn btn-outline-success mt-2" type="button" disabled>
        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
        &nbsp;&nbsp;Please Wait...
      </button>
  }
  // login button loading feature
  return <>
    <Navbar />
    <div className="container float-center mt-3">
      <div className="col-12">
        <input className="form-control" type="search" placeholder="Search" aria-label="Search" name="Aadhaar" onChange={onChangeData} />
        {button}
      </div>
    </div>
    {Object.keys(voter).length>0?<Profileform />:null}
  </>
}

export default UpdateProfile