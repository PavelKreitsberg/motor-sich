import React from "react";
import { Link } from "./Nav.styled";
import { NavContainer } from "./Nav.styled";

function Nav({ open, setOpen }) {
  return (
    <NavContainer>
      <Link open={open} onClick={() => setOpen(false)} to="/team">
        TEAM
      </Link>
      <Link open={open} onClick={() => setOpen(false)} to="/partners">
        PARTNERS
      </Link>
    </NavContainer>
  );
}

export default Nav;
