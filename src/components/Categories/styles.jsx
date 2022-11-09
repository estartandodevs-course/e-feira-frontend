import styled from 'styled-components';

export const Loader = styled.div`
  > .loader-container {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    background: rgba(0, 0, 0, 0.834);
    z-index: 1;
  }

  > .spinner {
    width: 64px;
    height: 64px;
    border: 8px solid;
    border-color: #3d5af1 transparent #3d5af1 transparent;
    border-radius: 50%;
    animation: spin-anim 1.2s linear infinite;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  height: 100%;
  padding: 1rem;
  margin-bottom: 4rem;
  > .mySwiperCategories * {
    background-color: white;
    align-items: center;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  > .cardBox {
  }
`;
export const HeaderButton = styled.div`
  display: flex;
  margin: 1rem 0;
  padding: 1rem 0;
  text-align: center;
  > a:link,
  a:visited,
  a:hover {
    text-decoration: none;
    color: #32a060;
  }
`;
export const PageTitle = styled.h3`
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

export const Card = styled.div`
  display: flex;
  flex-direction: row;
`;

export const CardLeft = styled.div`
  width: 50%;
  gap: 1rem;
`;

export const CardRight = styled.div`
  width: 50%;
  gap: 1rem;
`;

export const CardImg = styled.div`
  padding: 0 1rem 0 0;
  margin: 0.75rem 0;
  > img {
    border-radius: 12px;
    padding-bottom: 0.5rem;
  }
`;

export const CardDescription = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CardBottom = styled.div``;
export const CardTitle = styled.h6`
  grid-row-start: 1;
  grid-row-end: 1;
  padding: 0.5rem 0;
  text-align: start;
  font-style: normal;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 120%;
  width: 100%;
  inline-size: 15rem;
  overflow-wrap: break-word;
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
export const ItemPrice = styled.div`
  margin-top: 3rem;
  width: 100%;
`;
