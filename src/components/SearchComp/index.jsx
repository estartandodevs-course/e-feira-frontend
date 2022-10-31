import React, { useState, useEffect } from 'react';
import { Container, Text } from './styles';
import productsApi from '../../services/products';
import { ProductsContainer, ProductItem } from './styles';

export const SearchComp = () => {
  const { listProducts } = productsApi;
  const [products, setProducts] = useState([]);
  const [filterValue, setFilterValue] = useState('');
  const category_id = 1;

  useEffect(() => {
    const loadProducts = async () => {
      const res = await listProducts();
      if (res.success) {
        setProducts(res.data.filter(item => item.category_id === category_id));
      }
    };
    loadProducts();
  }, []);
  return (
    <Container>
      <Text>
        <div>
          <input
            type="text"
            value={filterValue}
            onChange={({ currentTarget }) => setFilterValue(String(currentTarget.value))}
          />

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
        </div>
      </Text>
    </Container>
  );
};
