import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import { Stack, Typography } from '@mui/material';
import NetworkWifiIcon from '@mui/icons-material/NetworkWifi';


const TerminalCard = () => {
  return (
      <Accordion sx={{alignSelf: 'flex-start'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Stack direction={'row'}>
            <Typography variant='h6' color="text.secondary" >Пост 1</Typography>
            <NetworkWifiIcon/>
            <Typography variant="subtitle1" color="text.secondary">-65дб</Typography>
          </Stack>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
  );
}

export default TerminalCard