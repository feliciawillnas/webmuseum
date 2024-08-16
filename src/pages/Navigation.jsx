import Button from "@mui/material/Button";
import React from "react";
import { Link } from "react-router-dom";

export function Navigation() {
  return (
    <>
      <div>Hej Navigation</div>
      <h1>My Custom Themed App</h1>
      <Button variant="contained" color="primary">
        Test button primary
      </Button>
      <Button variant="contained" color="secondary">
        Test button secondary
      </Button>
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
