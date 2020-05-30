import React, {useMemo} from "react"
import {  useStaticQuery, graphql  } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import GithubCard from "../components/githubcard"
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import {Grid} from '@material-ui/core';
import {Provider} from '../utils/github-client'
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';


const theme = createMuiTheme();

const APOLLO_QUERY= gql`
     
          {
            organization(login: "debtcollective") {
              repositories(first: 50) {
                nodes {
                  name
                  shortDescriptionHTML
                  stargazers {
                    totalCount
                  }
                  primaryLanguage {
                    color
                    name
                  }
                }
              }
              id
            }
          }
        
      `;

const IndexPage = () => {
  const [githubToken, setgithubToken] = React.useState("");
  const [queryData, setData] = React.useState("");
  
  function handleChange(newValue) {
    setgithubToken(newValue);
  }

  function handleLogout(newValue) {
    setgithubToken(newValue);
    setData(null)
  }

  const { loading, error, data, refetch, networkStatus } = useQuery(APOLLO_QUERY, {context: {headers: {'Authorization': 'Bearer ' + localStorage.getItem('github-token')}}});//
  
  useMemo(()=>{
    setData(data); 
  },[data])

  if(localStorage.getItem("github-token") !== null && !queryData){ //Refetch upon authentication
    refetch();
  }


  return(
  <MuiThemeProvider theme={theme}>
    <Provider onChange={handleChange} onLogout={handleLogout}/>
  <React.Fragment>
    <CssBaseline/>
  <Layout>
    <SEO title="Home" />
    <Grid container spacing={2}>
    {loading && networkStatus !== 4 && <p>Loading...</p>}
    {error && <p>Error: ${error.message}</p>}
    { queryData ? queryData.organization.repositories.nodes.map(({name,shortDescriptionHTML,stargazers,primaryLanguage},index)=>{
      return(
        <GithubCard key={index} title={name} description={shortDescriptionHTML} stars={stargazers} language={primaryLanguage}/>
      )
    }): null}
    </Grid>   
  </Layout>
  </React.Fragment>
  </MuiThemeProvider>
)
}


export default IndexPage
