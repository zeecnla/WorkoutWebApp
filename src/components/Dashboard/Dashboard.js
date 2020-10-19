import React from "react"
import WorkoutForm from "./WorkoutForm"
import WorkoutList from "./WorkoutList"
const Dashboard = ({ handleSubmit, handleChangeFor, workoutList }) => (
  <>
    <div className="row content">
      <div className="col-md-4">
        <WorkoutForm
          handleSubmit={handleSubmit}
          handleChangeFor={handleChangeFor}
        />
      </div>
      <div className="col-md-8">
        {workoutList && <WorkoutList workoutList={workoutList} />}
      </div>
    </div>
  </>
)

export default Dashboard
