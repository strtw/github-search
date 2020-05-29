/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import "./src/styles/global.css"
import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import fetch from 'isomorphic-fetch';

const client = new ApolloClient({
    fetch,
    uri: `https://api.github.com/graphql`
})

export const wrapRootElement = ({ element }) => {
    return (
        <ApolloProvider client={client}>
            {element}
        </ApolloProvider>
    )
}