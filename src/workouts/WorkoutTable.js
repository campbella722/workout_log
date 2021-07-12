import React from 'react';
import { Table, Button } from 'reactstrap';

const WorkoutTable = (props) => {
    const workoutMapper = () => {
        return props.workouts.map((workout, index) => {
            return(
                <tr key={index}>
                    <th scope="row">{workout.id}</th>
                    <td>{workout.result}</td>
                    <td>{workout.description}</td>
                    <td>{workout.definition}</td>
                    <td>
                        <Button color="warning">Update</Button>
                        <Button color="danger">Delete</Button>
                    </td>
                </tr>
            )
        })
    }
    return(
        <>
        <h3></h3>
        <hr/>
        <Table striped>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Result</th>
                    <th>Description</th>
                    <th>Definition</th>
                </tr>
            </thead>
            <tbody>

            </tbody>
        </Table>
        </>
    )
}

export default WorkoutTable;