import styled from 'styled-components';

export const Title = styled.h3`
  margin: 2rem 0 1rem 0;
`;
export const Access = styled.h4`
  color: #3ba032;
  padding: 0.5rem 0;
  font-size: large;
  cursor: pointer;
  justify-content: flex-start;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  height: 100%;
  > .swiper-wrapper * {
    background-color: #fff;
  }
`;
export const Main = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`;
export const Card = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: white;
`;
export const CardTitle = styled.h6`
  padding: 0.5rem 0;
  text-align: start;
  font-style: normal;
  font-weight: 400;
  font-size: 1.6rem;
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
export const CardBox = styled.div`
  background-color: #fff;
  height: 100%;
  width: 100%;
  margin: 0.75rem 0;
`;

export const CardImg = styled.div`
  > img {
    border-radius: 12px;
    padding-bottom: 0.5rem;
  }
`;
