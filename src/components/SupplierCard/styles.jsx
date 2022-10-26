import styled from 'styled-components';

export const Title = styled.h3`
  margin: 1rem 0;
`;
export const Access = styled.h2`
  padding: 1rem 0;
`;
export const MainImage = styled.img`
  width: 100%;
  border-radius: 1rem;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 0 2rem 0;
  height: 100%;
  > .mySwiper * {
    background-color: white;
    align-items: center;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  > .cardBox {
  }
`;

export const ContactInfo = styled.div`
  margin: 1rem;
  display: flex;
  justify-content: center;
  > * {
    margin-right: 1rem;
  }
`;
export const CardLeft = styled.div`
  width: 50%;
  /* display: flex;
  flex-direction: column; */
`;

export const Main = styled.div`
  /* display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: row; */
`;
export const Card = styled.div`
  display: flex;
  /* flex-direction: column; */
`;

export const CardImg = styled.div`
  /* background-color: #fff; */
  /* height: 100%; */
  /* width: 50%; */
  /* flex-grow: 2; */
  padding: 0 1rem 0 0;
  margin: 0.75rem 0;
  > img {
    border-radius: 12px;
    padding-bottom: 0.5rem;
  }
`;
export const CardDescription = styled.div`
  /* align-items: flex-end; */
  gap: 8px;
  width: 40%;

  /* display: inline-grid; */
`;

export const CardTitle = styled.h6`
  grid-row-start: 1;
  grid-row-end: 1;
  padding: 0.5rem 0;
  text-align: start;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 120%;
`;

export const CardSubTitle = styled.h6`
  grid-row-start: 2;
  grid-row-end: 2;
  background-color: #fff;
  padding: 0.25rem 0;
  text-align: start;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 120%;
`;

export const SupplierDescription = styled.div`
  margin-bottom: 1rem;
`;
