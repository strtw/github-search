import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/layout"
import GithubRepoSearch from "../components/github-repository-search"
import IndexPage from "./index"
import RenderUserList from '../components/renderuserlist'
import PrivateRoute from "../components/privateRoute"

const App = () => (
  <Layout>
    <Router>
      <PrivateRoute path="/app/github-repository-search" component={GithubRepoSearch}/>
      <PrivateRoute  path="/app/github-jobseekers" component={RenderUserList}/>
      <IndexPage path="/"/>
    </Router>
  </Layout>
)
export default App