import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SearchBox = styled.div`
  display: flex;
  margin: 2rem 4rem;
  margin-bottom: 2rem;

  > .MuiInputAdornment-root {
    width: 25rem;
  }
`;
export const ProductsContainer = styled.ul`
  ${() => css`
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 10px;
  `}
`;
export const ProductItem = styled.li`
  ${() => css`
    display: flex;
    gap: 10px;
    align-items: center;

    img {
      width: 60px;
      height: 60px;
      border-radius: 1rem;
    }
    a {
      align-items: center;
      display: flex;
    }
  `}
`;
