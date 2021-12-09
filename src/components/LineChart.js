import React, { useRef, useEffect } from "react"
import { Chart } from "chart.js"

const LineChart = ({ datasets, labels }) => {
  var chartRef = useRef()
  console.log(labels)
  useEffect(() => {
    const ctx = chartRef.current.getContext("2d")

    new Chart(ctx, {
      type: "line",
      data: {
        labels: labels,
        datasets: datasets,
      },
    })
  }, [])

  return (
    <div>
      <canvas id="myChart" ref={chartRef} />
    </div>
  )
}

export default LineChart
