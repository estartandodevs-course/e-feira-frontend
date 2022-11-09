import React from 'react';
import Swal from 'sweetalert2';
import { AlertTitles, ButtonMessage, Container, Img, Message } from './styles';

export const PurchaseAlert = () => {
  const Swal = require('sweetalert2');

  Swal.fire({
    title: 'Error!',
    text: 'Do you want to continue',
    icon: 'error',
    confirmButtonText: 'Cool',
  });

  return (
    <>
      <Container>
        <Img></Img>
        <AlertTitles></AlertTitles>
        <Message></Message>
        <ButtonMessage></ButtonMessage>
      </Container>
    </>
  );
};
