import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SearchBox = styled.div`
  display: flex;
  margin: 2rem;
  margin-bottom: 2rem;

  > .MuiInputAdornment-root {
    width: 100%;
  }
`;

export const CardLeft = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
export const CardRight = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const CardImg = styled.div`
  padding: 0 1rem 0 0;
  margin: 0.75rem 0;
  > img {
    border-radius: 12px;
    padding-bottom: 0.5rem;
    width: 100%;
    height: auti;
  }
`;
export const CardDescription = styled.div`
  align-items: flex-end;
  align-content: center;
  flex-direction: column;
`;

export const ItemPrice = styled.h3`
  width: 100%;
  padding: 2rem 0;
`;

export const CardTitle = styled.h3`
  width: 100%;
  gap: 0.5rem 0;
`;

export const CardSubTitle = styled.h6`
  background-color: #fff;
  padding: 0.5rem 0;
`;
export const OutlinedInput = styled.div`
  background-color: blue;
`;

export const ProductsContainer = styled.ul`
  ${() => css`
    list-style: none;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
    gap: 1px;
  `}
`;
export const ProductItem = styled.li`
  ${() => css`
    display: flex;
    gap: 10px;
    align-items: center;
    img {
      width: 15rem;
      height: 10rem;
      border-radius: 1rem;
    }
    a {
      align-items: center;
      display: flex;
    }
  `}
`;
