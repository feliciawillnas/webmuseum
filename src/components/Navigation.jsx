import { Link } from "react-router-dom";
import styled from "styled-components";

export function Navigation() {
  const links = [
    { id: "home", label: "Home", path: "/" },
    { id: "gallery", label: "Gallery", path: "/gallery" },
    { id: "information", label: "Information", path: "/information" },
    { id: "shop", label: "Shop", path: "/shop" },
  ];

  return (
    <>
      <LinkWrapper>
        <ul>
          {links.map((link) => (
            <li key={link.id}>
              <Link to={link.path}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </LinkWrapper>
    </>
  );
}

const LinkWrapper = styled.nav`
  padding: 1rem;

  ul {
    display: flex;
    flex-direction: column;
  }

  li {
    // Funkar inte som jag vill
    // Vill shrinkwrap varje li
    display: inline-block;
  }

  a {
    font-family: "Codystar", sans-serif;
    color: ${({ theme }) => theme.title};
    font-size: 4rem;
  }
`;
