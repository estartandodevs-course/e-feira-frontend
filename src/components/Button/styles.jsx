import styled from 'styled-components';

export const PrimaryButton = styled.div`
  display: flex;
  justify-content: center;
  width: 208vw;
  height: 60px;
  padding-bottom: 20px;
  & > button {
    width: 100%;
    background: #3ba032;
    border-radius: 8px;
    align-items: center;
    text-align: center;
    letter-spacing: 0.0125em;
    text-transform: uppercase;
    color: #fff;
    font-weight: 500;
    font-size: 16px;
    line-height: 120%;
    border: none;
    padding: 1rem;
  }
`;
