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
  background-color: white;
  margin: 2rem;
  > a:link,
  a:visited,
  a:hover {
    text-decoration: none;
    color: #32a060;
  }
  :focus {
    outline: none;
  }
  button {
    outline: none;
    border: none;
    color: #32a060;
  }
`;

export const SiteTitle = styled.h2`
  align-items: center;
  background-color: inherit;
  color: #32a060;
  display: flex;
  font-weight: bolder;
  justify-content: center;
  width: 100%;
  font-family: 'Bion';
  font-style: normal;
  font-size: 2.5rem;

  > a {
    color: inherit;
    text-decoration: none;
  }
`;
