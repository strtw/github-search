/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
//export { wrapRootElement } from './src/apollo/wrap-root-element';

import wrapRoot from './root-wrapper'
export const wrapRootElement = wrapRoot
