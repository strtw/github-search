
//via https://github.com/kentcdodds/react-github-profile/blob/b0c6a4628535fcea32f4f6617efd03f6b29574f4/src/github-client.js

import React from 'react'
import netlify from 'netlify-auth-providers'
import {GraphQLClient} from 'graphql-request'

async function authWithGitHub() {
  return new Promise((resolve, reject) => {
    var authenticator = new netlify({
      site_id: '7232692c-0119-4224-89a8-fff8b0cfb42c',
    })
    authenticator.authenticate(
      {provider: 'github', scope: 'public_repo,read:org,read:user'},
      function(err, data) {
        if (err) {
          reject(err)
        }
        resolve(data)
      },
    )
  })
}

const GitHubClientContext = React.createContext()


function getClient(token) {
  const headers = {Authorization: `bearer ${token}`}
  return new GraphQLClient('https://api.github.com/graphql', {headers})
}

class GitHubClientProvider extends React.Component {
  state = {client: null, error: null}
  componentDidMount() {
    const token =
      window.localStorage.getItem('github-token') ||
      process.env.REACT_APP_GITHUB_TOKEN
    if (token) {
      this.setState({client: getClient(token)})
    }
  }
  handleSignoutClick = () => {
    window.localStorage.removeItem('github-token')
    this.setState({client: null, error: null})
   
  }
  handleLoginClick = async () => {
    const data = await authWithGitHub().catch(error => {
      console.log('Oh no', error)
      this.setState({error})
    })
    window.localStorage.setItem('github-token', data.token)
    this.setState({client: getClient(data.token)})
  }
  render() {
    const {client, error} = this.state
    const {children} = this.props

    return client ? (
      <GitHubClientContext.Provider value={client}>
        <button className="github-login" onClick={this.handleSignoutClick}>Sign Out</button>
        {children}
      </GitHubClientContext.Provider>
    ) : error ? (
      <div>
        Oh no! Error! <pre>{JSON.stringify(error, null, 2)}</pre>
      </div>
    ) : (
      <div>
        <button className="github-login" onClick={this.handleLoginClick}>Sign In with Github</button>
        {children}
      </div>
    )
  }
}

const {Consumer} = GitHubClientContext

export {
  GitHubClientProvider as Provider,
  Consumer,
  GitHubClientContext as Context,
}