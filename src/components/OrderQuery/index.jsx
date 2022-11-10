import { useState } from 'react';
import { Container, SearchBox } from './styles';
import { InputAdornment, OutlinedInput } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export const OrderQuery = () => {
  const [searchOrder, setsearchOrder] = useState('');

  return (
    <Container>
      <SearchBox>
        <OutlinedInput
          sx={{ fontSize: 20, width: 300 }}
          type="text"
          value={searchOrder}
          placeholder="insira o código de compra"
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
          onChange={({ currentTarget }) =>
            setsearchOrder(String(currentTarget.value.normalize('NFKD').replace(/[^\w]/g, '')))
          }
        />
      </SearchBox>
    </Container>
  );
};
