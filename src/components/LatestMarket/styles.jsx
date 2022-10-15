import styled from "styled-components";

export const Title = styled.h3`  
  margin: 1rem 0; 

`
export const Access = styled.h4`
  color: #3BA032;
  padding: 0.5rem 0; 
`
export const Container = styled.div `
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  // padding: 0 1rem;
  height: 100%;
`

export const Market = styled.div `
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: row;

`
export const Card = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  
  `
export const CardTitle = styled.h6`
  padding: 0.5rem 0; 
  text-align: start;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 120%;
`
export const CardSubTitle = styled.h6`
  padding: 0.25rem 0; 
  text-align: start;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 120%;
`

export const CardImg = styled.div`
  height: 100%;
  width: 100%; 
  margin: 0.75rem 0;
  > img {
    border-radius: 12px;
    padding-bottom: 0.5rem;
  }
  `
