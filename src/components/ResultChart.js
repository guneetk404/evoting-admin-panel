import { Bar } from "react-chartjs-2";
import { CategoryScale } from 'chart.js';
import Chart from 'chart.js/auto';
import { useSelector } from "react-redux";
Chart.register(CategoryScale)

function ResultChart() {
    const votes = useSelector(state => state.vote.votes);
    let state = {
        labels: [],
        datasets: [
            {
                label: 'Votes',
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 1,
                data: []
            }
        ]
    }
    if (votes.length > 0) {
        let names = [];
        let points = [];
        for (let vote of votes) {
            names.push(vote.Contestant__name);
            points.push(vote.total);
        }
        state = {
            labels: names,
            datasets: [
                {
                    label: 'Votes',
                    backgroundColor: 'rgba(75,192,192,1)',
                    borderColor: 'rgba(0,0,0,1)',
                    borderWidth: 1,
                    data: points
                }
            ]
        }
    }

    return (
        <>
            <div className='row mt-5'>
                <div className='col-md-12'>
                    <h4 className="page-title text-center">Election Result</h4>
                </div>
            </div>
            <div className="container mt-5">
                <Bar
                    data={state}
                    options={{
                        title: {
                            display: true,
                            text: 'Average Rainfall per month',
                            fontSize: 20
                        },
                        legend: {
                            display: true,
                            position: 'right'
                        }
                    }}
                />
            </div>
        </>
    );
}

export default ResultChart;