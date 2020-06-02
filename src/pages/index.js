import React, {useState} from "react"
import Layout from "../components/layout"
import RenderCards from "../components/rendercards"
import RepositorySelector from '../components/repositoryselector'
import SEO from "../components/seo"
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import '../styles/global.css'


const theme = createMuiTheme();

const IndexPage = () => {
  return(
  <MuiThemeProvider theme={theme}>
  <React.Fragment>
    <CssBaseline/>
  <Layout>
    <SEO title="Home" />
    <h3>This web app uses Gatsby + Netlify to handle user Github OAuth authentication and deployment</h3>
    <ul>
    <li><h5>Search by Repository: display GitHub repository summary data by user or organization</h5></li>
    <li><h5>Search users flagged as job seekers: GitHub currently doesn't 
      provide a way for a user to indicate they are job searching. By flagging their Github profile location with #jobseeker, this app can locate them.</h5></li>
    </ul>
  </Layout>
  </React.Fragment>
  </MuiThemeProvider>
)
}


export default IndexPage
