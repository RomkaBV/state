import styled from 'styled-components';

export const List = styled.ul`
  display: grid;
  justify-items: center;
  grid-gap: 5px;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
`;

export const ListItem = styled.li`
  width: 350px;
`;
