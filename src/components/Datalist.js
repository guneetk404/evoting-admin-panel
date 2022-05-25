import React from 'react'
import { Link } from 'react-router-dom'

const Datalist = () => {
    return (
        <>
            <div className='container mt-3'>
                <h2 className='text-center mt-1'>Voter list</h2>
                <div className="list-group mt-4">
                    <Link to="#" className="list-group-item list-group-item-action checkactive">Election:  <span className='float-end'>Election No: </span></Link>
                </div>
            </div>
        </>
    )
}

export default Datalist