import React, {useState} from "react"
import RenderCards from "./rendercards"
import RepositorySelector from './repositoryselector'
import SEO from "./seo"
import {Grid} from '@material-ui/core';
import '../styles/global.css'
import { navigate } from "gatsby"

const GithubRepoSearch = () => {  
  const [userName,setUserName] = useState('')
  const [userType,setUserType] = useState('')
  let githubToken;
  if(typeof window !== 'undefined' && window.localStorage){
    githubToken = localStorage.getItem('github-token')
  }

  function RenderData(){
    if(userName && userType){
      return <RenderCards type={userType} name={userName}/>
    }else{
      return null
    }
  }

  function updateQuery(userName,userType){
    setUserName(userName);
    setUserType(userType)
  }

  return(
  <React.Fragment>
    <SEO title="Github Search"/>
    <RepositorySelector onClick={updateQuery}/>
    <Grid container spacing={2}>
      <RenderData isLoggedIn={githubToken ? true : false} />
    </Grid>   
  </React.Fragment>
)
}


export default GithubRepoSearch
