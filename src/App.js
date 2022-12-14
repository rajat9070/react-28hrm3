import React from 'react';
import './style.css';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'Form Date', width: 120 },
  { field: 'ToDate', headerName: 'To Date', width: 120 },
  { field: 'HireDate', headerName: 'Hire Date', width: 120 },
];

const rows = [
  { id: '1.20.2022', ToDate: '07.10.2022', HireDate: '07.10.2022' },
  { id: '1.20.2022', ToDate: '07.10.2022', HireDate: '07.10.2022' },
  { id: '1.20.2022', ToDate: '07.10.2022', HireDate: '07.10.2022' },
  { id: '1.20.2022', ToDate: '07.10.2022', HireDate: '07.10.2022' },
  { id: '1.20.2022', ToDate: '07.10.2022', HireDate: '07.10.2022' },
  { id: '1.20.2022', ToDate: '07.10.2022', HireDate: '07.10.2022' },
  { id: '1.20.2022', ToDate: '07.10.2022', HireDate: '07.10.2022' },
  { id: '1.20.2022', ToDate: '07.10.2022', HireDate: '07.10.2022' },
  { id: '1.20.2022', ToDate: '07.10.2022', HireDate: '07.10.2022' },
];




export default function DenseAppBar() {
  return (
    <div>
    <Box sx={{ flexGrow: 1 , m:2 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="h6" fontStyle= 'italic' color="inherit" component="div">
            Scheme in display mode
          </Typography>
        </Toolbar>
      </AppBar>
      <Card className="h- shadow" sx={{ minWidth: 300 , m:2}}>
        
        <CardContent>
          <div className="left" >
            <div className="textgroup">
              <div className="textfield1"sx={{  m:2}}>
                <TextField className="txt1" style={{margin:15}}
                  
                  disabled
                  id="outlined-disabled"
                  label="Payment Type"
                  defaultValue="CREDIT NOTE"
                />
              </div>
              
              <div>
                <TextField style={{margin:15}}
                    
                    disabled
                    id="outlined-disabled"
                    label="Settelment Type"
                    defaultValue="Weekly"
                    
                  />
              </div>
            
              <FormControl>
                <div className="TDSdiv">
                <div className="txt">
                  <FormLabel id="demo-row-radio-buttons-group-label" className="Formlabel">TDS:</FormLabel>
                </div>
                <div className="radioB">
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    size="small"
                  >
                  <FormControlLabel value="female" control={<Radio sx={{'& .MuiSvgIcon-root': {fontSize:15 },}}/>} label="TDS(GP)" />
                    <FormControlLabel value="male" control={<Radio sx={{'& .MuiSvgIcon-root': {fontSize:15 },}}/>} label="TDS(Net)" />
                    <FormControlLabel value="other" control={<Radio sx={{'& .MuiSvgIcon-root': {fontSize:15 },}} />} label="TDS(NA)"/>
                    
                  </RadioGroup>
                </div>
                </div>
              </FormControl>
            </div>
          </div>
          <div className="right">
            <div className="table" style={{ height: 260, width: '67%', color: 'blue' }}>
              <DataGrid
                rows={rows}
                columns={columns}
                //pageSize={3}
                //columnsperPageOptions={[4]}
                //rowsPerPageOptions={[]}
                //checkboxSelection
              />
            </div>
          </div>
        </CardContent>
        
      </Card>
    </Box>
    </div>
    
  );
}
