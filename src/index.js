import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { createGlobalStyle } from 'styled-components';
import './index.css'
import * as serviceWorker from './serviceWorker';

const GlobalStyle = createGlobalStyle`
    /* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
    */
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }


    /*-----BASE CSS BEGIN-----*/
    
    
    /*-----FONTS USED--------
    font-family: 'Modak', cursive;
    font-family: 'Roboto', sans-serif;
    ------------------------*/
    
    /*-----COLORS USED-------    
    #B5E8D5 - Light Blue
    #F9DB79 - Light Orange
    #A90F31 - Pink/Red
    #FFBFB3 - Light Pink
    #FFF - White    
    ------------------------*/


    
    *, *:before, *:after {
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
    }

    body {
        font-size: 2rem;
        font-family: 'Roboto', sans-serif;
        line-height: 2rem;
        letter-spacing: 2px;  
    }

    section {
        margin-bottom: 4%;
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: 'Modak', cursive;
        font-weight: 400;
        margin-bottom: 4%;
    }

    h1 {
        font-size: 4rem;
        line-height: 4rem;
    }
    h2 {
        font-size: 3rem;
    }
    h3 {
        font-size: 2rem;
    }
    h4 {
        font-size: 1rem;
    }
    h5 {
        font-size: 0.75rem;
    }
    h6 {
        font-size: 0.5rem;
    }

    a {
        text-decoration: none;
    }

    /*-----FORM STYLING-----*/

    label {
        font-weight: 700;
        margin: 2% 0;
    }

    input {
        width: 100%;
        border-radius: 4px;
        border: 1px solid #666;
        padding: 0.5%;
        margin-bottom: 4%;
    }

    /*-----BUTTON STYLING-----*/
    button {
        font-weight: 700;
        width: 100%;
        padding: 2%;
    }
`;



ReactDOM.render(
<Router>
    <GlobalStyle />
    <App />
</Router>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
