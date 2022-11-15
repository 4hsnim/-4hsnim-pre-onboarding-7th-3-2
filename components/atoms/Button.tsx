import styled, { css } from "styled-components";

type Props = {
  login?: boolean;
  color?: string;
};

const Button = styled.button<Props>`
  color: ${({ color, theme }) => color || theme.color.white};
  margin-left: 1rem;

  ${({ login }) =>
    login &&
    css`
      width: 20rem;
      height: 5rem;
      background-color: ${({ theme }) => theme.color.gray};
      border-radius: 9999px;
      margin-top: 2rem;
      ${({ theme }) => theme.fontStyles.label}
    `}
`;

export default Button;
