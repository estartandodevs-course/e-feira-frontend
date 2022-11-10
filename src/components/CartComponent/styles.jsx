import styled from 'styled-components';

export const Container = styled.div`
  width: 90%;
  height: 100%;
  margin: 1rem;
  margin-top: 2.8rem;
  margin-bottom: 10rem;
  padding-left: 1rem;
`;
export const AddressContainer = styled.div`
  padding-bottom: 1.2rem;
`;

export const AddressTitle = styled.h4`
  display: flex;
  margin-top: 1rem;
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

export const AddressCard = styled.div`
  justify-content: flex-start;
  margin: 1.4rem 0;
  align-items: flex-start;
  > :nth-child(3) {
    flex-grow: 3;
  }
  .map-icon {
    float: left;
    display: flex;
    padding: 0.5rem 0;

    justify-content: flex-start;
  }
`;

export const Address = styled.div`
  align-items: center;
  justify-content: center;
  > p {
    display: flex;
    width: 70%;
    padding: 0 0.8rem;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 120%;
    align-items: center;
    text-align: start;
    letter-spacing: 0.004em;
  }
  > input {
    width: 100%;
  }
`;
export const DeliveryPlace = styled.div`
  display: flex;
  padding: 1rem;
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

export const CartBox = styled.div``;

export const NothingFound = styled.div`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 120%;
  display: flex;
  justify-content: center;
  padding: 0 1rem;
  margin-top: 5rem;
  text-align: center;
`;

export const CardProvider = styled.p`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const CardCenter = styled.div`
  display: flex;
  width: 100%;
  align-items: start;
  align-content: center;
  flex-direction: column;
  justify-content: center;
`;

export const CardRight = styled.div`
  display: flex;
  margin-left: 2rem;
  gap: 5px;
  button {
    border: 0;
  }
`;

export const ProductsContainer = styled.div`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 1.5rem 0;
`;

export const IconContainer = styled.div`
  position: absolute;
  right: 15px;
  display: flex;
  gap: 0.5rem;
`;

export const ProductItem = styled.div`
  display: grid;
  /* width: 100%; */
  max-width: 100%;
  grid-template-columns: 0.7fr 1.2fr 0.8fr;
  gap: 10px;
  align-items: center;
  padding: 0.5rem;
  > img {
    flex-direction: column;
    justify-content: start;
    align-items: start;
  }
`;

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
export const Acess = styled.h3`
  padding-bottom: 1rem 0;
`;

export const ItemUnit = styled.div`
  display: flex;
`;

export const IconButton = styled.div`
  padding: 11rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 120%;
  > button {
    border: none;
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
`;

export const ProductQty = styled.h3`
  font-weight: 450;
  font-size: 1.4rem;
  line-height: 100%;
  align-items: center;
  letter-spacing: 0.004em;
  padding: 0.5rem 0;
`;

export const ProductPrice = styled.h3`
  font-style: normal;
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 100%;
  letter-spacing: 0.004em;
  align-items: center;
  padding: 0.5rem 0.2rem;
`;
export const PricesBox = styled.div`
  display: flex;
`;
export const ProductTotal = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 1.5rem;
`;

export const KeepBuying = styled.div`
  display: flex;
  margin: 0;
  flex-direction: column;
  float: right;
  justify-content: flex-start;
`;

export const Text = styled.h3`
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

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
  align-items: center;
  margin-top: 2rem;
  width: 75%;
  > button {
    border: none;
  }
`;

export const OrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
`;

export const SubTotalOrderValue = styled.h4`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  line-height: 120%;
  letter-spacing: 0.004em;

  span {
    display: flex;
    float: right;
  }
`;

export const ShippingPrice = styled.h4`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  line-height: 120%;
  letter-spacing: 0.004em;
  padding: 0.55rem 0;
  span {
    display: flex;
    float: right;
  }
`;

export const TotalOrder = styled.h4`
  font-family: 'Roboto';
  font-style: bold;
  font-weight: 700;
  line-height: 120%;
  letter-spacing: 0.004em;
  margin-top: 1rem;
  padding: 1rem 0 0 0;
  span {
    display: flex;
    float: right;
  }
`;

export const Thing = styled.h4`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  line-height: 120%;
  letter-spacing: 0.004em;
`;

export const Payment = styled.div`
  margin: 1rem 0 5rem 0;
`;

export const PaymentText = styled.h3`
  padding: 1.2rem 0;
`;

export const PaymentInfo = styled.h3`
  display: flex;
  justify-content: flex-start;
  margin: 1rem 0 3rem 0;
  text-align: center;
  > .money-icon {
    padding: 0 0.5rem 0 0;
  }
`;
