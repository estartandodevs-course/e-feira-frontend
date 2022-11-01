import React from 'react';
import { SearchComp } from '../../components/SearchComp';
import { ContainerStyle } from './styles';
// import { Helmet } from 'react-helmet';

const Search = () => {
  return (
    <>
      <ContainerStyle>
        {/* <Helmet>
          <title>Encontre Produtos </title>
        </Helmet> */}
        <SearchComp />;
      </ContainerStyle>
    </>
  );
};

export default Search;
