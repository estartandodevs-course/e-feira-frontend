import styled, { css } from 'styled-components';

export const Container = styled.div`
  /* display: flex;
  flex-direction: column; */
  width: 90%;
  height: 100%;
  padding: 1rem;
  margin: 2rem 0;
  > .mySwiperCategories * {
    /* background-color: white; */
    /* align-items: center;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap; */
  }
  > h3 {
    text-align: center;
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
    flex-direction: column;
    gap: 10px;
    align-items: center;
  `}
`;

export const ProductImage = styled.div`
  img {
    width: 25rem;
    height: 100%;
    border-radius: 30px;
  }
`;

export const ProductName = styled.h3`
  justify-content: center;
  align-items: center;
`;

export const ProductQty = styled.h4``;

export const ProductPrice = styled.h4``;

export const ProductTotal = styled.h4``;
