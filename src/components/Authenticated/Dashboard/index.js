import React from "react";
import { auth } from "../../../firebase";
import Logout from "../../Logout";
import WorkoutForm from "../../WorkoutForm";
import Workouts from "../../Workouts";

function Dashboard() {
  return (
    <div>
      <h1>this is the dashboard</h1>
      <WorkoutForm />
      <Workouts />
      <Logout />
    </div>
  );
}

export default Dashboard;
