import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const LogoText = styled.p`
  font-size: 36px;
  font-weight: 300;
`;

export const Link = styled(NavLink)`
  z-index: 10;
  color: ${({ open, theme }) =>
    !open ? theme.colors.bcgLight : theme.colors.bcgDark};
`;
