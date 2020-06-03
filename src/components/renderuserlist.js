
import React, {useState} from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import DataTable from './datatable'
import SearchBar from './searchbar'

const RenderUserList = ({}) => {
    const gitHubToken = typeof window !== 'undefined' && window.localStorage ? localStorage.getItem('github-token') : null
    const [location, setLocation] = useState('')
    const JOBSEEKER_QUERY= gql `query GitHubLocation($location: String!){ 
        search(query:$location, type: USER, first:10){
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

   const { loading, error, data, networkStatus } = useQuery(JOBSEEKER_QUERY, {
        variables: {location:`location:"${location}"`},
        context: {headers: {'Authorization': 'Bearer ' + gitHubToken}}},
        
   )

   const handleSearch = (value) => {
         setLocation(value)
   }


    if(loading && networkStatus !== 4){
      return (<p>Loading...</p>)
    } 
    if(error){
      return (<p>Error: ${error.message}</p>)
    }

    if(data && !loading){
        return(
            <>
            <SearchBar placeholder={'Enter username'} onClick={handleSearch}/>
            <DataTable data={data.search.edges}
            columnMap={{
                "name":"Name",
                "email":"Email",
                "location":"Location",
                "websiteUrl":"Website",
                "login":"Github Username"
                }}/>
            </>
        )
    } 
}

export default RenderUserList;