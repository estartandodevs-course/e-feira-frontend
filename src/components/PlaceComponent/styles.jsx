import styled from 'styled-components';

export const AdressContainer = styled.div`
  width: 90%;
  height: 100%;
  margin: 1rem;
  margin-top: 2rem;
  padding: 0rem 1rem;
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
  > p {
    width: 75%;
  }
  > input {
    width: 100%;
  }
`;

export const AdressTitle = styled.h4`
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

export const AdressCard = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin: 1.4rem 0;
  align-items: flex-start;
  > :nth-child(3) {
    flex-grow: 3;
  }
  > .map-icon {
    float: left;
    justify-content: flex-start;
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
