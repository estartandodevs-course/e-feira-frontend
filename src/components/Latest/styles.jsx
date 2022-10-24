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
export const Title = styled.h3`
  margin: 1rem 0;
`;
export const Main = styled.div``;
export const Access = styled.h4`
  color: #3ba032;
  padding: 0.5rem 0;
  cursor: pointer;
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
export const CardImg = styled.div`
  background-color: #fff;
  height: 100%;
  width: 100%;
  margin: 0.75rem 0;
  > img {
    border-radius: 12px;
    padding-bottom: 0.5rem;
  }
`;
