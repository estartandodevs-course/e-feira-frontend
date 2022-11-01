import styled from 'styled-components';

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
export const Card = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: white;
  flex-direction: column;
  > img {
    width: 60px;
    height: 60px;
    border-radius: 10px;
  }
`;
export const CardTitle = styled.h6`
  width: 121px;
  height: 12px;
  left: 64px;
  top: 0px;
  font-weight: 500;
  font-size: 12px;
  line-height: 120%;
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: 0.004em;
  padding: 0;
`;

export const CardSubTitle = styled.h6`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 120%;

  display: flex;
  flex-direction: column;
  align-items: center;
  letter-spacing: 0.004em;
`;


export const CardChildren = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const CardRight = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: white;
  flex-direction: column;
`;
export const ProductsContainer = styled.div`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const ProductItem = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  flex-direction: row;
=======
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
