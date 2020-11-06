import React from "react"

const WorkOutButton = ({openModal})=>(
    <button
        onClick={openModal}
         type="button"
         className="btn btn-primary"
         data-toggle="modal"
         data-target=".bd-workout-modal-lg"
        style={{
            width: `150px`,
            height: `100px`,
            borderRadius: `25px`,
            border: `1px solid transparent`,
            backgroundColor: `rgb(19, 36, 128)`,
            color: `rgb(255, 255, 255)`,
            textAlign: `left`,
            fontWeight: `bold`,
            fontSize:'20px',
            display: `flex`,
            padding: `15px`,
        }}>
        Create New Workout
    </button>
)

export default WorkOutButton

