import React from "react";
import { Link } from "react-router-dom";

export function Navigation() {
  return (
    <>
      <div>Hej Navigation</div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
