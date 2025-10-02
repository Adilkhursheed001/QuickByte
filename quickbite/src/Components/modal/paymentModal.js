import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useContext } from 'react';
import { cartcontext } from '../../Context/CartContext';
import Lottie from 'lottie-react';
import PaymentSuccessful from '../../Order completed.json';
import { height } from '@mui/system';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  display:"flex",
 display: "flex", 
 flexDirection: 'column',
  justifyContent: "center", 
    alignItems: "center", 
  transform: 'translate(-50%, -50%)',
  height:"auto",
  width: 400,
 bgcolor: '#ffffff',
  borderRadius: '12px',
  boxShadow: 24,
  border:"none",
   boxShadow: '0px 0px 0px transparent',
   outline: 'none',
  p: 4,
};

export default function BasicModal() {
  
    const {openPayment} = useContext(cartcontext);

  return (
    <div>
     
      <Modal
        open={openPayment}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
           <Lottie animationData={PaymentSuccessful}/> 
          <Typography id="modal-modal-description" sx={{ color: '#333333'}}>
          Payment completed
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
