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
  ProductItem,
  SearchBox,
} from './styles';
import { InputAdornment, OutlinedInput, Box } from '@mui/material';
import productsApi from '../../services/products';
import SearchIcon from '@mui/icons-material/Search';

export const SearchComp = () => {
  const { listProducts } = productsApi;
  const [products, setProducts] = useState([]);
  const [showBoxData, setshowBoxData] = useState('');

  useEffect(() => {
    const loadProducts = async () => {
      const res = await listProducts();
      if (res.success) {
        setProducts(res.data);
      }
    };
    loadProducts();
  }, []);

  return (
    <Container>
      <SearchBox>
        <OutlinedInput
          sx={{ fontSize: 20 }}
          alignItems="flex-start"
          type="text"
          value={showBoxData}
          placeholder="O que procura?"
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
          onChange={({ currentTarget }) =>
            setshowBoxData(String(currentTarget.value.normalize('NFKD').replace(/[^\w]/g, '')))
          }
        />
      </SearchBox>

      {showBoxData !== '' && (
        <Box>
          {products
            .filter(item =>
              item.name.normalize('NFKD').replace(/[^\w]/g, '').toLowerCase().includes(showBoxData.toLowerCase())
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
        </Box>
      )}
    </Container>
  );
};
