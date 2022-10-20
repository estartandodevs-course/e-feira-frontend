import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  // padding: 0 1rem;
  height: 100%;
  > .swiper-wrapper * {
    background-color: #fff;
  }
`;

export const Card = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: white;
  flex-direction: column;
  > img {
    padding: 3.75rem 1rem 1.31rem 1rem;
  }
`;

export const CardTitle = styled.h6`
  text-align: start;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 120%;
  margin: 0 1rem;
  padding: 0;
`;

export const CardSubTitle = styled.h6`
  text-align: start;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 120%;
  margin: 0 1rem;
`;

export const TextInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
`;

export const TextQuestion = styled.h6`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 120%;
  padding: 0 1rem;
`;

export const CardPrice = styled.div`
  background: rgba(59, 160, 50, 0.2);
  width: 20%;
  height: auto;
  border-radius: 6px;
  padding: 0.5rem 1rem;
  margin: 1rem 0;
  display: flex;

  text-align: center;
  align-items: center;

  & > p {
    font-weight: 500;
    font-size: 16px;
    line-height: 120%;
    text-align: center;
    letter-spacing: 0.0125em;
    text-transform: uppercase;
    color: #fff;
  }
`;

export const CardInformations = styled.div`
  justify-content: flex-start;
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: end;
`;

export const MeetSupplier = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: flex-end;
  padding: 3.12rem 1rem;
  gap: 0.625rem;
`;

export const PriceCompare = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0 1rem;
  gap: 0.625rem;
`;
