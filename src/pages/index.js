import React from "react"
import { Link, StaticQuery, graphql  } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
/*
function Header() {
  return (
    <StaticQuery
      query={graphql`
      
        # Field name parameter defines how you can access a third-party API
        query{
          allSpecies {
            name
          }
        }
      
      `}
      render={data => (
       
          <p>{data}</p>
      )}
    />
  )
}*/

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    {/*<Header/>*/}
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
