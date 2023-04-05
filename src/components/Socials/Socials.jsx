import { AiFillYoutube, AiFillInstagram, AiFillFacebook } from "react-icons/ai";
import { SocialsContainer } from "./Socials.styled";

function Socials() {
  return (
    <SocialsContainer>
      <AiFillYoutube color="#051934" size="32px" />
      <AiFillInstagram color="#051934" size="32px" />
      <AiFillFacebook color="#051934" size="32px" />
    </SocialsContainer>
  );
}

export default Socials;
