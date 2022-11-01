import styled, { css } from 'styled-components';

export const ContainerStyle = styled.div`
  > .Mui-selected {
    color: #32a060;
  }
  margin-top: 1rem;
  background-color: #fff0;
  position: fixed;
  bottom: 0;
  z-index: 10;
  width: 100vw;
`;

export const CircleIcon = styled.svg`
  ${() => css`
    color: #e41409;
  `}
`;
