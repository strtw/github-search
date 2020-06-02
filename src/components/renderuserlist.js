
import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import DataTable from './datatable'
import GithubCard from './githubcard'

const RenderUserList = ({location}) => {
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
      {context: {headers: {'Authorization': 'Bearer ' + localStorage.getItem('github-token')}},//TODO move token to prop
      })

  

   


    if(loading && networkStatus !== 4){
      return (<p>Loading...</p>)
    } 
    if(error){
      return (<p>Error: ${error.message}</p>)
    }

    if(data && !loading){
        return(
            <DataTable data={data.search.edges}/>
        )
    } 
}

export default RenderUserList;