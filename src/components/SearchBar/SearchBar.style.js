import styled from 'styled-components';

export const Conteiner = styled.div`
  width: 350px;
  margin: 20px 0px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0px 0px 8px #ddd;
  padding: 0 15px;
  display: flex;
  align-items: center;
`;
export const SearchBar = styled.div`
  display: flex;
  align-items: center;
`;

export const SearchInput = styled.input`
  background-color: transparent;
  border: none;
  width: 100%;
  height: 100%;
  font-size: 1.25rem;
  margin-left: 5px;

  &:focus {
    outline: none;
  }
`;
export const SearchSelect = styled.select`
  padding-left: 5px;
  border: none;
  border-left: 1px solid #ccc;
  &:focus {
    outline: none;
  }
`;
