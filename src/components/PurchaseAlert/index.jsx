import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material';
import { AlertTitles, ButtonMessage, Img, Message } from './styles';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import EfeiraIcon from '../../assets/images/efeira-icon';

export const PurchaseAlert = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* <Button onClick={() => setOpen(true)}>Open Dialog</Button> */}
      <Dialog
        aria-labelldby="dialog-title"
        aria-describedby="dialog-description"
        open={open}
        onClose={() => setOpen(false)}
      >
        <DialogTitle id="dialog-title">
          <Img>
            <EfeiraIcon />
          </Img>

          <AlertTitles>Pedido Concluído com sucesso !</AlertTitles>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="dialog-description">
            <Message>
              Seu pedido foi efetuado com sucesso. Fique de olho no seu e-mail que você receberá uma mensagem com os
              detalhes da sua compra. Seu pedido chegará em sua casa em até 7 dias úteis.
            </Message>
          </DialogContentText>
        </DialogContent>
        <DialogActions style={{ justifyContent: 'center' }}>
          {/* <Button onClick={() => setOpen(false)}> Cancel</Button> */}
          <ButtonMessage>
            <Button autoFocus className="btn-back">
              <Link onClick={() => setOpen(false)} to={`/`}>
                Voltar para a tela inicial
              </Link>
            </Button>
          </ButtonMessage>
        </DialogActions>
      </Dialog>
    </>
  );
};
