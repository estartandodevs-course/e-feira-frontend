import styled from 'styled-components';

// Endereço de Entrega

export const AdressContainer = styled.div`
  margin: 1.43 rem 0;
`;

export const AdressTitle = styled.h4`
  display: flex;
  padding-bottom: 1rem;
  > h3 {
    justify-content: flex-start;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 120%;
    letter-spacing: 0.001em;
  }
`;

export const AdressCard = styled.div`
  justify-content: flex-start;
  display: inline;
  margin: 1.4rem 0;
  align-items: flex-start;
  > .map-icon {
    float: left;
    justify-content: flex-start;
  }
`;
export const DeliveryPlace = styled.div`
  display: flex;
  padding: 0 0.8rem;
  align-items: flex-start;
  justify-content: flex-start;
  > p {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 120%;
    align-items: center;
    letter-spacing: 0.004em;
  }
`;

export const Adress = styled.div`
  display: flex;
  padding: 0 0.8rem;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 0.8rem;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 120%;
  align-items: center;
  letter-spacing: 0.004em;
`;

export const CardProvider = styled.p`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

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

export const CardCenter = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  flex-direction: column;
  justify-content: center;
`;

export const ProductsContainer = styled.div`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 1.5rem 0;
`;
export const ProductItem = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  > img {
    flex-direction: column;
    justify-content: start;
    align-items: start;
  }
`;

// export const ProductItem = styled.li`
//   ${() => css`
//     display: flex;
//     flex-direction: column;
//     gap: 10px;
//     align-items: center;
//   `}

export const ProductImage = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  > img {
    width: 92px;
    height: 72px;
    border-radius: 10px;
  }
`;

export const ProductName = styled.h3`
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 16px;
  line-height: 120%;
  align-items: center;
  letter-spacing: 0.004em;
  padding: 0.5rem 0;
`;

export const ProductQty = styled.h3`
  font-weight: 450;
  font-size: 14px;
  line-height: 120%;
  align-items: center;
  letter-spacing: 0.004em;
  padding: 0.5rem 0;
`;

export const ProductPrice = styled.h3`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 120%;
  letter-spacing: 0.004em;
  align-items: center;
  padding: 0.5rem 0;
`;

export const ProductTotal = styled.h4``;

export const KeepBuying = styled.div`
  display: flex;
  margin: 0;
  justify-content: flex-start;
`;

export const Text = styled.h4`
  display: flex;
  align-items: center;
  h3 {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 120%;
    display: flex;
    align-items: center;
    letter-spacing: 0.001em;
  }
`;
export const IconContainer = styled.div`
  position: absolute;
  right: 15px;
  display: flex;
  gap: 0.5rem;
`;
