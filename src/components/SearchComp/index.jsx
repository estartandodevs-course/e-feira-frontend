import { useState, useEffect } from 'react';
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
import { Link } from 'react-router-dom';
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
          type="text"
          value={showBoxData}
          placeholder="digite o produto"
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
                <Link to={`/produtos/${item.id}`}>
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
                </Link>
              </ProductItem>
            ))}
        </Box>
      )}
    </Container>
  );
};
