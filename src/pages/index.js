import React from "react"
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
  const { loading, error, data } = useQuery(APOLLO_QUERY, {context: {headers: {'Authorization': 'Bearer ' + localStorage.getItem('github-token')}}});
    
  return(
  <MuiThemeProvider theme={theme}>
    <Provider/>
  <React.Fragment>
    <CssBaseline/>
  <Layout>
    <SEO title="Home" />
    <Grid container spacing={2}>
    {loading && <p>Loading...</p>}
    {error && <p>Error: ${error.message}</p>}
    { data ? data.organization.repositories.nodes.map(({name,shortDescriptionHTML,stargazers,primaryLanguage},index)=>{
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
