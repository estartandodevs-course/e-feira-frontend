import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  // padding: 0 1rem;
  height: 100%;
  background-color: white;


`
export const CategoriesTitles = styled.h3`
  margin: 1.6rem 0;
  display: flex;
  flex-direction: column;
`

export const CategoriesCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: row;
`

export const Card = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: white;
`

export const CardTitle = styled.h5`
  display: inline;
  flex-direction: row;
  text-align: center;
  align-items: center;
  margin-top: 2rem 0; 
  padding-top: 2rem 0; 

`

export const CardImg = styled.div`
height: 100%;
width: 15rem;
background-color: white;

> img {
  border-radius: 12px;
  padding-bottom: 0.5rem;
}
`