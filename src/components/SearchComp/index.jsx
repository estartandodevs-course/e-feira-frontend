import React, { useState, useEffect } from 'react';
import {
  CardDescription,
  CardImg,
  CardLeft,
  CardRight,
  CardSubTitle,
  CardTitle,
  Container,
  ItemPrice,
  SearchBox,
} from './styles';
import productsApi from '../../services/products';
import { ProductsContainer, ProductItem } from './styles';
import { InputAdornment, OutlinedInput } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export const SearchComp = () => {
  const { listProducts } = productsApi;
  const [products, setProducts] = useState([]);
  const [inputBoxData, setinputBoxData] = useState('');
  const [filterValue, setFilterValue] = useState(false);
  // const category_id = 1;

  // const test = 'ç';
  // const test1 = 'c';

  // const testResult = test.normalize('NFKD') == test1.normalize('NFKD');
  // console.log(testResult);

  useEffect(() => {
    const loadProducts = async () => {
      const res = await listProducts();
      if (res.success) {
        setProducts(res.data);
      }
    };
    loadProducts();
  }, []);

  useEffect(() => {
    (() => {
      if (inputBoxData == '') {
        console.log('Empty Array');
      } else {
        setFilterValue;
      }
    })();
  }, [inputBoxData]);

  return (
    <Container>
      <SearchBox>
        <OutlinedInput
          sx={{ fontSize: 20 }}
          type="text"
          value={inputBoxData}
          letterSpacing="0.001em"
          placeholder="Insira o que procura"
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon style={{ fontSize: '30' }} />
            </InputAdornment>
          }
          onChange={({ currentTarget }) =>
            setinputBoxData(String(currentTarget.value.normalize('NFKD').replace(/[^\w]/g, '')))
          }
        />
      </SearchBox>

      <ProductsContainer>
        {products
          .filter(item =>
            item.name.normalize('NFKD').replace(/[^\w]/g, '').toLowerCase().includes(filterValue.toLowerCase())
          )
          .map(item => (
            <ProductItem key={item.id}>
              <a href={`produtos/${item.id}`}>
                <CardLeft>
                  <CardImg>
                    <img src={item.image} />
                  </CardImg>
                </CardLeft>
                <CardRight>
                  <CardDescription>
                    <CardTitle>{item.name}</CardTitle>
                    <CardSubTitle>{item.subtitle}</CardSubTitle>
                    <ItemPrice>R$ {item.price.toFixed(2)}</ItemPrice>
                  </CardDescription>
                </CardRight>
              </a>
            </ProductItem>
          ))}
      </ProductsContainer>
    </Container>
  );
};
