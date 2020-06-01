import React from "react"
import Layout from "../components/layout"
import RenderCards from "../components/rendercards"
import SEO from "../components/seo"
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import {Grid} from '@material-ui/core';
import {Provider} from '../utils/github-client'
import '../styles/global.css'



const theme = createMuiTheme();


  

const IndexPage = () => {
  console.log(localStorage.getItem('github-token'))
  const [githubToken, setgithubToken] = React.useState(localStorage.getItem('github-token'));
    
  function handleChange(newValue) {
    setgithubToken(newValue);  
  }


  function handleLogout(newValue) {
    setgithubToken(newValue);
  }

  function RenderData({isLoggedIn}){
    if(isLoggedIn){
      return <RenderCards/>
    }else{
      return <p>You must log in with GitHub to continue</p>
    }
  }

  return(
  <MuiThemeProvider theme={theme}>
    <Provider onChange={handleChange} onLogout={handleLogout}/>
  <React.Fragment>
    <CssBaseline/>
  <Layout>
    <SEO title="Home" />
    <Grid container spacing={2}>
      <RenderData isLoggedIn={githubToken ? true : false}/>
    </Grid>   
  </Layout>
  </React.Fragment>
  </MuiThemeProvider>
)
}


export default IndexPage
