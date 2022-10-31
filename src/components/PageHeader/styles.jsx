import styled from 'styled-components';

export const HeaderBox = styled.div`
  display: flex;
  margin-top: 2rem;
  background-color: #fff;
  height: 2rem;
  width: 100%;
  align-items: center;
`;

export const GoBackButton = styled.div`
  position: absolute;
  margin: 2rem;
  > a:link,
  a:visited,
  a:hover {
    text-decoration: none;
    color: #32a060;
  }
`;

export const SiteTitle = styled.h3`
  align-items: center;
  background-color: inherit;
  color: #32a060;
  display: flex;
  font-weight: bolder;
  justify-content: center;
  width: 100%;
  font-family: 'Bion';
  font-style: normal;

  > a {
    color: inherit;
    text-decoration: none;
  }
`;
