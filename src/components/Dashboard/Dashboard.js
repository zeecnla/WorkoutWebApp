import React from "react"
import WorkOutButton from "../Shared/WorkOutButton"
import Graph from "./Graph"
import WorkoutForm from "./WorkoutForm"
import WorkoutList from "./WorkoutList"
const Dashboard = ({ handleSubmit, handleChangeFor, workoutList }) => (
  <>
  <div className="row content">
    <div className="col-md-4">
      <h1 style={{fontWeight:'bold'}}>Hello, </h1>
    </div>
  </div>
  <div className="row content">
    <div className="col-md-12">
      <Graph/>
    </div>
  </div>
    {/* <div className="row content">
      <div className="col-md-4">
        <WorkoutForm
          handleSubmit={handleSubmit}
          handleChangeFor={handleChangeFor}
        />
      </div>
      <div className="col-md-8">
        {workoutList && <WorkoutList workoutList={workoutList} />}
      </div>
    </div> */}
    <div className="row content">
      <div className="col-md-4">
        <WorkOutButton/>
      </div>
      <div className="col-md-8">
        {workoutList && <WorkoutList workoutList={workoutList} />}
      </div>
    </div>
  </>
)

export default Dashboard
