/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import fetch from 'isomorphic-fetch';
/*import {Provider} from './src/utils/github-client'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';*/
import wrapRoot from './root-wrapper'
/*const client = new ApolloClient({
    fetch,
    uri: `https://api.github.com/graphql`
})*/

/*const theme = createMuiTheme();

export const wrapRootElement = ({ element }) => {
    return (
        <MuiThemeProvider theme={theme}>
        <CssBaseline/>
        <Provider>
        <ApolloProvider client={client}>
            {element}
        </ApolloProvider>
        </Provider>
        </MuiThemeProvider>
    )
}*/

export const wrapRootElement = wrapRoot
