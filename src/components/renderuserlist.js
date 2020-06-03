
import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import DataTable from './datatable'
import GithubCard from './githubcard'

const RenderUserList = ({location}) => {
    const gitHubToken = typeof window !== 'undefined' && window.localStorage ? localStorage.getItem('github-token') : null
    const queryList = []
    const type = ['user']
    const name = ['strtw']
    const JOBSEEKER_QUERY= gql `query { 
        search(query:"location:San Diego", type: USER, first:10){
         edges{
          node{
            ...on User{
              repositories(first: 100) {
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
            ...on ProfileOwner{
              name
              email
              location
              websiteUrl
              login
            }
          }
        }
        }
      }
    `;

    
    

   const { loading, error, data, networkStatus } = useQuery(JOBSEEKER_QUERY, 
      {context: {headers: {'Authorization': 'Bearer ' + gitHubToken}},//TODO move token to prop
      })

  

   


    if(loading && networkStatus !== 4){
      return (<p>Loading...</p>)
    } 
    if(error){
      return (<p>Error: ${error.message}</p>)
    }

    if(data && !loading){
        return(
            <DataTable data={data.search.edges} 
            columnMap={{
                "name":"Name",
                "email":"Email",
                "location":"Location",
                "websiteUrl":"Website",
                "login":"Github Username"
                }}/>
        )
    } 
}

export default RenderUserList;