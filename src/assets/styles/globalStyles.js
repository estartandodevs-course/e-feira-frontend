import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    
* {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #242424;
    text-decoration: none;
  }
  
  html {
    /* 62.5% of 16px browser font size is 10px */
    font-size: 62.5%;
  }
  
  :root {
    --primary-color: #252525;
    --primary-color-dark: #252525;
    --primary-color-light: #252525;
    --neutral-color: #252525;
    --neutral-color-dark: #242424;
    --neutral-color-light: #FFFFFF;
    --alert-color: #AA3929;
    --error-color: #C06C5F;
    --swiper-theme-color: #81CAA8;
  }
  
  body {
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
  }
  

.swiper-button-next,
.swiper-container-rtl .swiper-button-prev,
.swiper-button-prev, 
.swiper-container-rtl .swiper-button-next{
    background-image: none;
}

.swiper-button-next,
.swiper-button-prev, 
.swiper-container-rtl .swiper-button-prev,
.swiper-container-rtl .swiper-button-next{
    fill: var(--primary-color-dark)
}

.swiper {
    width: 100%;
    height: 100%;
    
}

.swiper-slide {
text-align: center;
font-size: 18px;
background: #242424;
/* Center slide text vertically */
display: -webkit-box;
display: -ms-flexbox;
display: -webkit-flex;
display: flex;
-webkit-box-pack: center;
-ms-flex-pack: center;
-webkit-justify-content: center;
justify-content: center;
-webkit-box-align: center;
-ms-flex-align: center;
-webkit-align-items: center;
align-items: center;
}
  
.swiper-slide img {
display: block;
width: 100%;
height: 100%;
object-fit: cover;
}
  
`;
export default GlobalStyle;
