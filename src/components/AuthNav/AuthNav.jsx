import { NavLink } from "react-router-dom";
import { AuthNavContainer } from "./AuthNav.styled";
import { Link } from "./AuthNav.styled";

function AuthNav({ open, setOpen }) {
  return (
    <AuthNavContainer>
      <Link open={open} onClick={() => setOpen(false)} to="/register">
        REGISTER
      </Link>
      <Link open={open} onClick={() => setOpen(false)} to="/login">
        LOGIN
      </Link>
    </AuthNavContainer>
  );
}

export default AuthNav;
