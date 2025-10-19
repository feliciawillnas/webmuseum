import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

/* fonts: 
    font-family: "Bayon", sans-serif;
    font-family: "Miss Fajardose", cursive;
    font-family: "Codystar", sans-serif;
    font-family: "Astloch", system-ui;
    font-family: "Overpass", sans-serif; 
*/

html, body, #root {
    height: 100%;
    margin: 0;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background-color: ${({ theme }) => theme.background};
}

/* Typography */
h1, h2, h3, h4, h5, span, p {
    color: ${({ theme }) => theme.text};
}

h1 {
    font-family: "Codystar", sans-serif;
    font-size: 4rem;
    font-weight: 400;
    font-style: normal;

    @media (max-width: 768px) {

    }
}

h3 {
    font-family: "Astloch", system-ui;
    font-size: 35px;
}

h4 {
    font-family: "Codystar", sans-serif;
    font-size: 15px;
}

h5 {
    font-family: 'Courier', Courier, monospace;
    /* text-transform: uppercase; */
    font-weight: 500;
    font-size: 16px;
}


p {
    font-family: "Courier", Courier, monospace;
    font-size: 16px;
    font-weight: 500;

    @media (max-width: 768px) {

    }
}

a {
    color: ${({ theme }) => theme.secondary};
    text-decoration: none;
    cursor: pointer;
}

ul {
    list-style: none;
}

li {
    font-family: 'Courier', Courier, monospace;
    list-style: none;
}
`;
