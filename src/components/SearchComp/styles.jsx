import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* background-color: blue; */
  > OutlinedInput {
    width: 30rem;
    background-color: blue;
  }
  > OutlinedInput {
    background-color: blue;
  }
`;

export const OutlinedInput = styled.div`
  background-color: blue;
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
    flex-wrap: wrap;
    align-content: center;
    gap: 10px;
  `}
`;
export const ProductItem = styled.li`
  ${() => css`
    display: flex;
    gap: 10px;
    align-items: center;
    img {
      width: 10rem;
      height: 10rem;
      border-radius: 1rem;
    }
    a {
      align-items: center;
      display: flex;
    }
  `}
`;
