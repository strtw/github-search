import {Provider} from './src/utils/github-client'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import "./src/styles/global.css"
import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

const theme = createMuiTheme();

const client = new ApolloClient({
    fetch,
    uri: `https://api.github.com/graphql`
})

const wrapRoot = ({ element }) => {
    return (
        <>
        <MuiThemeProvider theme={theme}>
        <Provider>
        <CssBaseline/>
        
        <ApolloProvider client={client}>
            {element}
        </ApolloProvider>
        </Provider>
        </MuiThemeProvider>
        
        </>
    )
}

export default wrapRoot;