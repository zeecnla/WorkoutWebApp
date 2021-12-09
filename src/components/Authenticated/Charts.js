import React, { useState, useReducer, useEffect } from "react"

import useUser from "../../context/auth"
import LineChart from "../LineChart"
import { getUserWorkoutPlots } from "../../firebase"
import { Title, ChartWrapper, FullScreen } from "../styledComponents"

export const Charts = () => {
      const labels= []
      const data = []
  const user = useUser()
  useEffect(() => {
    getUserWorkoutPlots(user).then((response) => {
      response.forEach((doc) => {
            
      })
    })
  }, [])
  const defaultLabels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]
  const benchDataSet = {
    data: [86, 114, 106, 106, 107, 111, 133],
    label: "Total",
    borderColor: "#3e95cd",
    backgroundColor: "#7bb6dd",
    fill: false,
  }
  //   {
  //             data: [86, 114, 106, 106, 107, 111, 133],
  //             label: "Total",
  //             borderColor: "#3e95cd",
  //             backgroundColor: "#7bb6dd",
  //             fill: false,
  //           },
  //           {
  //             data: [70, 90, 44, 60, 83, 90, 100],
  //             label: "Accepted",
  //             borderColor: "#3cba9f",
  //             backgroundColor: "#71d1bd",
  //             fill: false,
  //           },
  //           {
  //             data: [10, 21, 60, 44, 17, 21, 17],
  //             label: "Pending",
  //             borderColor: "#ffa500",
  //             backgroundColor: "#ffc04d",
  //             fill: false,
  //           },
  //           {
  //             data: [6, 3, 2, 2, 7, 0, 16],
  //             label: "Rejected",
  //             borderColor: "#c45850",
  //             backgroundColor: "#d78f89",
  //             fill: false,
  //           },
  return (
    <FullScreen>
      <ChartWrapper>
        <Title inputColor="#fff">Charts</Title>
        <h2>
          For now the 4 charts displayed will be Bench, Squat,Deadlift, and a
          chart with all of them ccombined
        </h2>
        <LineChart datasets={[benchDataSet]} labels={defaultLabels} />
      </ChartWrapper>
    </FullScreen>
  )
}
