import styled from 'styled-components';

export const ImgCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  object-fit: cover;
`;

export const AlertTitles = styled.h2`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 900;
  font-size: 16px;
  line-height: 19px;
  text-align: center;

  color: #202020;
`;

export const Message = styled.h6`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 13px;
  text-align: center;
  color: #202020;
  opacity: 0.5;
  padding: 0;
  margin: 0;
  letter-spacing: 0.0058em;
`;

export const ButtonMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  background-color: #54aa47;
  width: 40%;
  float: left;
  text-decoration: none;
  & > .btn-back {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 14px;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
`;
