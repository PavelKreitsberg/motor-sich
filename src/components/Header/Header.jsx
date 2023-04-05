import AuthNav from "../AuthNav/AuthNav";
import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import Burger from "../Burger/Burger";
import { HeaderContainer } from "./Header.styled";
import { useState } from "react";
import { useMatchMedia } from "../../hooks/use-match-media";
import Menu from "../Menu/Menu";

function Header() {
  const [open, setOpen] = useState(false);
  const { isDesktop } = useMatchMedia();

  return (
    <HeaderContainer>
      {isDesktop && <Nav open={open} setOpen={setOpen} />}
      <Logo open={open} setOpen={setOpen} />
      {!isDesktop && <Burger open={open} setOpen={setOpen} />}
      {isDesktop && <AuthNav open={open} setOpen={setOpen} />}
      <Menu open={open} setOpen={setOpen} />
    </HeaderContainer>
  );
}

export default Header;
