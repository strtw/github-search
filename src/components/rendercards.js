
import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import GithubCard from './githubcard'

const RenderCards = ({type, name}) => {
    console.log(type,name)
    const APOLLO_QUERY= gql`
     
    {
      ${type}(login: "${name}") {
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

    const { loading, error, data, networkStatus } = useQuery(APOLLO_QUERY, 
      {context: {headers: {'Authorization': 'Bearer ' + localStorage.getItem('github-token')}},
      })

    if(loading && networkStatus !== 4){
      return (<p>Loading...</p>)
    } 
    if(error){
      return (<p>Error: ${error.message}</p>)
    }

    if(data && !loading){
      return data[type].repositories.nodes.map(({name,shortDescriptionHTML,stargazers,primaryLanguage},index)=>{
        return(
          <GithubCard key={index} title={name} description={shortDescriptionHTML} stars={stargazers} language={primaryLanguage}/>
        )
      })
    } 
}

export default RenderCards;