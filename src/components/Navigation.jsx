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
            <Link to="/cart">Cart</Link>
          </li>
          <li>
            <Link to="/information">Information</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
