import React from "react"
import {  useStaticQuery, graphql  } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import GithubCard from "../components/githubcard"
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import {Grid} from '@material-ui/core';
import {Provider} from '../utils/github-client'




const theme = createMuiTheme();

const IndexPage = () => {
  const {github} = useStaticQuery(
    graphql`
        query  {
          github {
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
        }
      `);
  const {nodes : repositories} = github.organization.repositories
  return(
    
  <MuiThemeProvider theme={theme}>
    <Provider/>
  <React.Fragment>
    <CssBaseline/>
  <Layout>
    <SEO title="Home" />
  
    <Grid container spacing={2}>
    {repositories.map(({name,shortDescriptionHTML,stargazers,primaryLanguage},index)=>{
      return(
        <GithubCard key={index} title={name} description={shortDescriptionHTML} stars={stargazers} language={primaryLanguage}/>
      )
    })}
    </Grid>
   
  </Layout>
  </React.Fragment>
  </MuiThemeProvider>
)
}


export default IndexPage
