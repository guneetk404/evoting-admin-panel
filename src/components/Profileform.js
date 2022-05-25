import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { authactionCreators, votingactionCreators } from '../state';

const Profileform = () => {
    const buttonloading = useSelector(state => state.auth.buttonloading);
    const voter = useSelector(state => state.vote.voter);
    let button = <button className="btn btn-primary" type="submit">Update Profile</button>
    if (buttonloading) {
        button =
            <button className="btn btn-primary" type="button" disabled>
                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                &nbsp;&nbsp;Please Wait...
            </button>
    }
    const dispatch = useDispatch();
    const { buttonLoadingAction } = bindActionCreators(authactionCreators, dispatch);
    const { ProfileupdateAction, ProfiledeleteAction, resetState } = bindActionCreators(votingactionCreators, dispatch);
    const [userfile, setUserfile] = useState(null);
    const [user, setUser] = useState({
        'Aadhaar': voter.Aadhaar,
        'Address': voter.Address,
        'City': voter.City,
        'Email': voter.Email,
        'FatherName': voter.FatherName,
        'Gender': voter.Gender,
        'Mobile': voter.Mobile,
        'Name': voter.Name,
        'Pincode': voter.Pincode,
        'State': voter.State,
        'id': voter.id,
        'User': voter.User
    });
    const onChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }
    const onSubmit = (event) => {
        event.preventDefault()
        const uploadData = new FormData();
        for (let key in user) {
          uploadData.append(key, user[key]);
        }
        for (let key in userfile) {
          uploadData.append(key, userfile[key]);
        }
        buttonLoadingAction(true)
        ProfileupdateAction(uploadData)
        setUser({
            'Aadhaar': "",
            'Address': "",
            'City': "",
            'Email': "",
            'FatherName': "",
            'Gender': "",
            'Mobile': "",
            'Name': "",
            'Pincode': "",
            'State': "",
            'id': '',
            'User': ''
        });
        resetState();
    }
    const Deleteprofile = (event) => {
        buttonLoadingAction(true)
        ProfiledeleteAction(event)
        resetState();
    }
    return (
        <>
            <div className='container mt-3'>
                <div className="card shadow p-3 mb-5 bg-body rounded">
                    <form onSubmit={onSubmit}>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Mobile</label>
                            <input type="number" className="form-control" id="exampleInputEmail1" name="Mobile" value={user.Mobile} disabled />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Aadhaar</label>
                            <input type="number" className="form-control" id="exampleInputEmail1" name="Aadhaar" value={user.Aadhaar} disabled />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" name="Email" value={user.Email} disabled />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" name="Name" value={user.Name} onChange={onChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Father Name</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" name="FatherName" value={user.FatherName} onChange={onChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Gender</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" name="Gender" value={user.Gender} onChange={onChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Address</label>
                            <textarea className="form-control" id="exampleInputEmail1" name="Address" value={user.Address} onChange={onChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">City</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" name="City" value={user.City} onChange={onChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">State</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" name="State" value={user.State} onChange={onChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Pin Code</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" name="Pincode" value={user.Pincode} onChange={onChange} />
                        </div>
                        <div className="input-group mb-3">
                            <input type="file" className="form-control" id="inputGroupFile02" accept="image/*" name='Photo' onChange={(e) => { setUserfile({ ...userfile, [e.target.name]: e.target.files[0] }) }} />
                            <label className="input-group-text" for="inputGroupFile02">Upload</label>
                        </div>
                        {button}
                        <button className="btn btn-danger float-end" type="button" onClick={() => Deleteprofile(user)}>Delete Profile</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Profileform