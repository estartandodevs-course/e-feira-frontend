import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const Text = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
      border-radius: 30px;
    }
  `}
`;
