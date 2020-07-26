import React from "react";
import { Nav } from "react-bootstrap";

export default function Navbar() {
  return (
    <div style={{ backgroundColor: "#e3dfc8", color: "#fff" }}>
      <Nav>
        <Nav.Item>
          <Nav.Link>Now Playing</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>Playlist</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}
