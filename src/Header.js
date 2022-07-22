import React from "react";

export default function Header() {
  return (
    <header>
      <nav className="nav">
        <img src="./logo192.png" className="nav-logo" />
        <ul className="nav-items">
          <button type="button"><li>Pricing</li></button>
          <button type="button"><li>About</li></button>
          <button type="button"><li>Contact</li></button>
        </ul>
      </nav>
    </header>
  );
}
