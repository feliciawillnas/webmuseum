import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

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
    background-color: ${({ theme }) => theme.body};
}

/* Typography */
h1, h2, h3, h4, h5, span, p {
    color: ${({ theme }) => theme.text};
}

h1 {
    font-family: "Noto Serif, serif";
    font-size: 4.2rem;
    font-weight: 350;

    @media (max-width: 768px) {

    }
}

h2 {
    font-family: "Noto Serif, serif";
    color: ${({ theme }) => theme.title};

    @media (max-width: 768px) {

    }
}

h4 {

    @media (max-width: 768px) {

    }
}

h6 {

    color: ${({ theme }) => theme.text};
}

span {

}

p {
    font-family: "Helvetica Neue, Arial, sans-serif";
    font-size: 1rem;
    font-weight: 400;

    @media (max-width: 768px) {

    }
}

a {
    color: ${({ theme }) => theme.secondary};
    text-decoration: none;
    cursor: pointer;
    font-family: "Helvetica Neue, Arial, sans-serif";
    font-size: 5rem;
}

ul {
    list-style: none;
}

li {
    list-style: none;
}


`;
