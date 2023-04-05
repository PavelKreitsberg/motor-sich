import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { up } from "styled-breakpoints";

export const NavContainer = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${up("pcSizeS")} {
    flex-direction: row;
  }
`;

export const Link = styled(NavLink)`
  position: relative;

  color: ${({ open, theme }) =>
    !open ? theme.colors.bcgLight : theme.colors.bcgDark};

  font-size: ${({ theme }) => theme.fontSizes.xl};

  transition: color 0.3s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.accentColor};
  }

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 4px;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.colors.accentColor};
    bottom: 0;
    left: 0;
    transform-origin: right;
    transform: scaleX(0);
    transition: transform 0.3s ease-in-out;
  }

  &:hover::before {
    transform-origin: left;
    transform: scaleX(1);
  }

  &.active {
    color: ${({ theme }) => theme.colors.accentColor};
  }

  &.active::before {
    color: ${({ theme }) => theme.colors.accentColor};
    transform-origin: left;
    transform: scaleX(1);
  }

  ${up("pcSizeS")} {
    font-size: ${({ theme }) => theme.fontSizes.md};
    padding: 8px 0;
    margin-right: 8px;

    &:last-child {
      margin-right: 0px;
    }
  }
`;
