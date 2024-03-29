import React from "react"
import { Link } from "react-router-dom"
import Logout from "./Logout"

const Navbar = () => {
  return (
    <nav
      style={{
        width: `200px`,
        padding: `20px`,
      }}
    >
      <ul
        style={{
          display: `flex`,
          justifyContent: `space-between`,
          alignItems: `center`,
          padding: `0px 20px`,
          flexDirection: "column",
          margin: `20px`,
          height: `90%`,
        }}
      >
        <li>
          <h3>Workout Tracker</h3>
        </li>
        <li>
          <Link to="./Charts">Charts</Link>
        </li>
        <li>
          <Link to="./Profile">Profile</Link>
        </li>
        <li>
          <Logout
            style={{
              alignSelf: "end",
            }}
          >
            Logout
          </Logout>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
