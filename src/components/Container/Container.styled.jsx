import styled from "styled-components";
import { up } from "styled-breakpoints";

const Container = styled.div`
  margin: auto;
  max-width: 490px;
  padding: 0 16px;

  ${up("tablet")} {
    max-width: 890px;
    padding: 0 24px;
  }

  /* border: 2px solid ${({ theme }) => theme.colors.accentColor}; */
  ${up("pcSizeS")} {
    max-width: 1280px;
    padding: 0 32px;
  }
`;

export default Container;
