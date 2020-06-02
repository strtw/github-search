import React, {useState} from "react"
import Layout from "../components/layout"
import RenderCards from "../components/rendercards"
import RepositorySelector from '../components/repositoryselector'
import RenderUserList from '../components/renderuserlist'
import SEO from "../components/seo"
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import {Grid} from '@material-ui/core';
import {Provider} from '../utils/github-client'
import '../styles/global.css'
//import { useApolloClient } from "@apollo/react-hooks"



const theme = createMuiTheme();


  

const IndexPage = () => {
  console.log(localStorage.getItem('github-token'))
  const [githubToken, setgithubToken] = useState(localStorage.getItem('github-token'));
  const [userName,setUserName] = useState('')
  const [userType,setUserType] = useState('')
    
  function handleLogin(newValue) {
    setgithubToken(newValue);  
  }


  function RenderData({isLoggedIn}){
    if(isLoggedIn && userName && userType){
      return <RenderCards type={userType} name={userName}/>
    }else{
      return <p>You must log in with GitHub to continue</p>
    }
  }

  function updateQuery(userName,userType){
    setUserName(userName);
    setUserType(userType)
  }

  return(
  <MuiThemeProvider theme={theme}>
    <Provider handleLogin={handleLogin}/>
  <React.Fragment>
    <CssBaseline/>
  <Layout>
    <SEO title="Home" />
    <RepositorySelector onClick={updateQuery}/>
    <Grid container spacing={2}>
      <RenderData isLoggedIn={githubToken ? true : false} />
    </Grid>   
  </Layout>
  </React.Fragment>
  </MuiThemeProvider>
)
}


export default IndexPage
