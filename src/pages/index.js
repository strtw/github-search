import React from "react"
import { Link, useStaticQuery, graphql  } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  const {github} = useStaticQuery(
    graphql`
        query {
          github {
            organization(login: "debtcollective") {
              repositories(first: 100) {
                nodes {
                  name
                  shortDescriptionHTML
                   stargazers {
                    totalCount
                  }
                }
              }
            }
          }
        }
      `);
  const {nodes : repositories} = github.organization.repositories
  return(
  <Layout>
    <SEO title="Home" />
    {repositories.map(({name})=>{
      return(
        <p>{name}</p>
      )
    })}
  </Layout>
)
}


export default IndexPage
