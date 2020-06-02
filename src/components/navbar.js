import React from "react"
import { Link } from "gatsby"

export default function NavBar() {
  return (
    <div
      style={{
        display: "flex",
        flex: "1",
        justifyContent: "flex-end",
        borderBottom: "1px solid #d1c1e0",
        
      }}
    >
      <nav>
        <Link to="/">Home</Link>
        {` `}
        <Link to="/app/github-repository-search">User Repositories</Link>
        {` `}
        <Link to="/app/github-jobseekers">Find Jobseekers</Link>
        {` `}
      </nav>
    </div>
  )
}