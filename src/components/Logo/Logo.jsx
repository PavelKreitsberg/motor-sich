import { NavLink } from "react-router-dom";
import { LogoText, Link } from "./Logo.styled";

function Logo({ open, setOpen }) {
  return (
    <Link open={open} onClick={() => setOpen(false)} to="/">
      <LogoText>MS</LogoText>
    </Link>
  );
}

export default Logo;
