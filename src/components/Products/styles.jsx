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
`;
