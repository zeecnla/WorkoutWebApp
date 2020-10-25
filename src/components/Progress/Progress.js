import React, { useEffect, useState } from "react"
import { LineChart, Line, XAxis, Tooltip, CartesianGrid } from "recharts"
import { useAuth } from "../../context/auth-context"
import authAxios from "../../services/AuthService"
const Progress = () => {
  const { user } = useAuth()
  const [gridData, setGridData] = useState()
  useEffect(() => {
    authAxios
      .get(`/users/${user?.id}/workouts/all`)
      .then((resp) => {
        console.log(resp)
        return resp
      })
      .then(({ data }) => {
        console.log(data)
        setGridData(data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <LineChart
      width={600}
      height={600}
      data={gridData}
      margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
    >
      <XAxis dataKey="name" />
      <Tooltip />
      <CartesianGrid stroke="#f5f5f5" />
      <Line type="monotone" dataKey="uv" stroke="#ff7300" yAxisId={0} />
      <Line type="monotone" dataKey="pv" stroke="#387908" yAxisId={1} />
    </LineChart>
  )
}

export default Progress
