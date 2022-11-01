import React, { useState, useEffect } from 'react';
import { Container, SearchBox } from './styles';
import productsApi from '../../services/products';
import { ProductsContainer, ProductItem } from './styles';
import { InputAdornment, OutlinedInput } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export const SearchComp = () => {
  const { listProducts } = productsApi;
  const [products, setProducts] = useState([]);
  const [filterValue, setFilterValue] = useState('');
  // const category_id = 1;

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
          type="text"
          fontSize=""
          value={filterValue}
          placeholder="Insira o que procura"
          startAdornment={
            <InputAdornment position="start">
              {' '}
              <SearchIcon />
            </InputAdornment>
          }
          onChange={({ currentTarget }) => setFilterValue(String(currentTarget.value))}
        />
      </SearchBox>

      <ProductsContainer>
        {products
          .filter(item => item.name.toLowerCase().includes(filterValue.toLowerCase()))
          .map(item => (
            <ProductItem key={item.id}>
              <a href={`produtos/${item.id}`}>
                <img src={item.image} />
                {item.name}
              </a>
            </ProductItem>
          ))}
      </ProductsContainer>
    </Container>
  );
};
