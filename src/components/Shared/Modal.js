import React from "react"
import {Modal} from "react-bootstrap"
import WorkoutForm from "../Dashboard/WorkoutForm"

const ReactModal = (props) => {

const {handleSubmit,handleChangeFor,workout,close,showModal } = props

return (

  <Modal show={showModal} onHide={close}>
    <Modal.Header closeButton>
      <Modal.Title>Add Workout</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <WorkoutForm
          handleSubmit={handleSubmit}
          handleChangeFor={handleChangeFor}
          workout={workout}
          close={close}
        />
    </Modal.Body>
  </Modal>
  )
}

export default ReactModal
