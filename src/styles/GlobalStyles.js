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
    height: auto;
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
}


p {
    font-family: "Courier New", Courier, monospace;
    font-size: 14px;

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
    list-style: none;
}
`;
