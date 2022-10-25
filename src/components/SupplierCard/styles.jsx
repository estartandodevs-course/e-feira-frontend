import styled from 'styled-components';

export const Title = styled.h3`
  margin: 1rem 0;
`;
export const Access = styled.h2`
  color: #3ba032;
  padding: 0.5rem 0;
`;
export const MainImage = styled.img`
  width: 100%;
  border-radius: 1rem;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  // padding: 0 1rem;
  height: 100%;
  > .mySwiper * {
    display: grid;
    grid-template-columns: auto 3fr;
    background-color: white;
    align-items: center;
  }
`;

export const Main = styled.div`
  /* display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: row; */
`;
export const Card = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CardImg = styled.div`
  /* background-color: #fff; */
  /* height: 100%; */
  width: 80%;
  flex-grow: 2;
  margin: 0.75rem 0;
  > img {
    border-radius: 12px;
    padding-bottom: 0.5rem;
  }
`;
export const CardDescription = styled.div`
  /* align-items: flex-end; */
  gap: 8px;
  width: 100%;

  /* justify-content: flex-end;
  display: flex;
  flex-direction: column; */
`;

export const CardTitle = styled.h6`
  padding: 0.5rem 0;
  text-align: start;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 120%;
`;

export const CardSubTitle = styled.h6`
  background-color: #fff;
  padding: 0.25rem 0;
  text-align: start;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 120%;
`;
