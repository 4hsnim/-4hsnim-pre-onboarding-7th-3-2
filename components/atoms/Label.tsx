import styled from "styled-components";
import { css } from "styled-components";

type Props = {
  login?: boolean;
};

const Label = styled.label<Props>`
  ${({ theme }) => theme.color.black}
  ${({ theme }) => theme.fontStyles.label}

  ${({ login }) =>
    login &&
    css`
      margin-left: 1.3rem;
    `}
`;

export default Label;
