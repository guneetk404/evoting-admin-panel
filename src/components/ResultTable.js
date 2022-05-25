import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { votingactionCreators } from '../state';

const ResultTable = (props) => {
    const { onSelectionElection } = props;
    const elections = [];
    const getresults = useSelector(state => state.vote.electionresults);
    const dispatch = useDispatch();
    const { electionresultsLoadAction } = bindActionCreators(votingactionCreators, dispatch);
    if (getresults.length > 0) {
        for (let election of getresults) {
            elections.push(<Link to="#" key={election.id} onClick={() => onSelectionElection(election)} className="list-group-item list-group-item-action checkactive">Election: {election.electiontype} <span className='float-end'>Election No: {election.contestno}</span></Link>)
        }
    }
    useEffect(() => {
        electionresultsLoadAction();
        // eslint-disable-next-line
    }, [])

    return (
        <>
            <div className='container mt-3'>
                <h2 className='text-center mt-1'>Results list</h2>
                <div className="list-group mt-4">
                    {elections.length>0 ? elections : <div className='text-center'>No Results live</div>}
                </div>
            </div>
        </>
    )
}

export default ResultTable