import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

export default function AccordionUsage({payment,setPayment}) {

  

  const handleChange = (e) => {
    setPayment(e.target.value);
  }

  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span" 
          sx={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 600,fontStyle:'normal' }}
          >Choose Payment Method
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
         <FormControl component="fieldset">
          <RadioGroup value={payment} onChange={(e) => handleChange(e)}>
            <FormControlLabel value="upi" control={<Radio />} label="UPI" />
            <FormControlLabel value="debit" control={<Radio />} label="Debit Card" />
              {payment === 'debit' && (
            <div style={{ marginTop: 16 }}>
              <TextField fullWidth label="Card Number" margin="normal" />
              <TextField fullWidth label="Expiry Date" margin="normal" />
              <TextField fullWidth label="CVV" margin="normal" />
              
            </div>
          )}
            <FormControlLabel value="cod" control={<Radio />} label="Cash on Delivery" />
          </RadioGroup>
          
        </FormControl>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
