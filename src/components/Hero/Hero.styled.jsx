import styled from "styled-components";

export const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  padding: 16px;
  height: 600px;
  background: linear-gradient(
      0deg,
      rgba(5, 25, 52, 1) 0%,
      rgba(255, 255, 255, 0.3) 100%
    ),
    url(../../images//test-image.jpg);

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
