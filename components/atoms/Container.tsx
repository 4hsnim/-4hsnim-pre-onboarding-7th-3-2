import styled from "styled-components";

type Props = {
  flexDirection?: string;
};

const Container = styled.div<Props>`
  width: 100%;
  height: 100vh;
  display: flex;

  flex-direction: ${({ flexDirection }) => flexDirection || "column"};
  /* flex-direction: column; */
  align-items: center;
  box-sizing: border-box;
`;

export default Container;
