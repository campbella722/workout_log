import React, {useState, useEffect} from 'react';
import { Container, Row, Col } from 'reactstrap';
import WorkoutCreate from './WorkoutCreate';
import WorkoutTable from './WorkoutTable';
import WorkoutEdit from './WorkoutEdit';

const WorkoutIndex = (props) => {
    const [workouts, setWorkouts] = useState([]);
    const [updateActive, setUpdateActive] = useState(false);
    const [workoutToUpdate, setWorkoutToUpdate] = useState({});

    const fetchWorkouts = () => {
        console.log(props.token);
        
        fetch('http://localhost:3000/log/', {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${props.token}`
            })
        }).then( (res) => res.json())
        .then((logData) => {
            setWorkouts(logData)
            console.log(logData)
        })
    }
    const editUpdateWorkout = (workout) => {
        setWorkoutToUpdate(workout);
        console.log(workout);
        }
    const updateOn = () => {
        setUpdateActive(true);
    }
        
    const updateOff = () => {
        setUpdateActive(false);
    }
    useEffect(() => {
        fetchWorkouts();
    }, [])
    
    return(
        <div>
            <Container>
                <Row>
                    <Col md="3">
                        <WorkoutCreate fetchWorkouts={fetchWorkouts} token={props.token}/>
                    </Col>
                    <Col md="9">
                        <WorkoutTable workouts={workouts} editUpdateWorkout={editUpdateWorkout} updateOn={updateOn} fetchWorkouts={fetchWorkouts} token={props.token}/>
                    </Col>
                    {updateActive ? <WorkoutEdit workoutToUpdate={workoutToUpdate} updateOff={updateOff} token={props.token} fetchWorkouts={fetchWorkouts}/> : <></>}
                </Row>
            </Container>
        </div>
    )
}

export default WorkoutIndex;