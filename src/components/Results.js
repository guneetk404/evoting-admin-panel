import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { votingactionCreators } from '../state';
import Navbar from './Navbar'
import ResultChart from './ResultChart';
import ResultTable from './ResultTable'

const Results = () => {
    const votes = useSelector(state => state.vote.votes);
    const dispatch = useDispatch();
    const { electionresultsAction } = bindActionCreators(votingactionCreators, dispatch);
    const onSelectionElection = (election) =>{
        electionresultsAction(election);
    }
    const [election] = useState(<ResultTable onSelectionElection={onSelectionElection} />)
    return (
        <>
            <Navbar />
            {votes.length>0? <ResultChart/> :election}
        </>
    )
}

export default Results