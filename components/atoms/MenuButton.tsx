import styled from "styled-components";

const MenuButton = styled.button`
  ${({ theme }) => theme.fontStyles.text};
  color: ${({ theme }) => theme.color.white};
  margin-left: 1rem;
`;
export default MenuButton;
