import styled from "styled-components";

const Text = styled.span`
  ${({ theme }) => theme.color.black}
  ${({ theme }) => theme.fontStyles.Text}
`;

export default Text;
