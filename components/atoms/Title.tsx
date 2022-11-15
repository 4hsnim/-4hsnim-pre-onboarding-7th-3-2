import styled from "styled-components";

type Props = {
  color?: string;
  fontSize?: string;
};

const Title = styled.h1<Props>`
  font-size: ${({ fontSize }) => fontSize || "10rem"};
  color: ${({ color, theme }) => color || theme.color.black};
  margin-top: 4rem;
`;

export default Title;
