// import { UserNav } from "components/UserNav/UserNav";
// import { useAuth } from "hooks";
// import { useMatchMedia } from "hooks/use-match-media";
import AuthNav from "../AuthNav/AuthNav";
import Nav from "../Nav/Nav";
import Socials from "../Socials/Socials";
import { StyledMenu, StyledNav } from "./Menu.styled";

const Menu = ({ setOpen, open }) => {
  //   const { isMobile } = useMatchMedia();
  //   const { isLoggedIn } = useAuth();

  if (open) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
  return (
    <StyledMenu open={open}>
      <StyledNav>
        <AuthNav open={open} setOpen={setOpen} />
        {/* {isMobile && isLoggedIn && <UserNav setOpen={setOpen} />} */}
        {/* {isMobile && !isLoggedIn && <AuthNav setOpen={setOpen} />} */}
        <Nav open={open} setOpen={setOpen} />
        <Socials />
      </StyledNav>
    </StyledMenu>
  );
};

export default Menu;
