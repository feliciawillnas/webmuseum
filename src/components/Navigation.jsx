import { Link } from "react-router-dom";
import styled from "styled-components";

export function Navigation() {
  const links = [
    { to: "/", label: "Home" },
    { to: "/gallery", label: "Gallery" },
    { to: "/information", label: "Information" },
    { to: "/shop", label: "Shop" },
  ];

  return (
    <>
      <LinkWrapper>
        <ul>
          {links.map((link) => (
            <li key={link.to}>
              <Link to={link.to}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </LinkWrapper>
    </>
  );
}

const LinkWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  line-height: 0.85;

  ul {
    display: flex;
    flex-direction: column;
    // Fixa så detta funkar
    font-weight: 100;
  }

  a {
    color: ${({ theme }) => theme.title};
  }
`;
