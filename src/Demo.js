import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import XLSX from 'sheetjs-style';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 110,
  },
];

const rowsvalue = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export default function DownloadUpload() {
  const handleDownload = () => {
    const fileType =
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const ws = XLSX.utils.json_to_sheet(rowsvalue);
    const wb = { Sheets: { data: ws }, SheetNames: ['data'] };
    const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    const blobobj = new Blob([excelBuffer], { type: fileType });
    const blobUrl = URL.createObjectURL(blobobj);
    const link = document.createElement('a');
    link.href = blobUrl;
    link.download = 'data';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const ImportExcel = (file) => {
    console.log('Hii rajat');
    return new Promise((resolve, reject) => {
      if (file) {
        const fileReader = new FileReader();
        fileReader.readAsBinaryString(file);
        fileReader.onload = (event) => {
          const data = event.target.result;
          const workbook = XLSX.read(data, { type: 'binary' });
          resolve(
            workbook.SheetNames.map((sheet) => {
              return XLSX.utils.sheet_to_row_object_array(
                workbook.Sheets[sheet]
              );
            })
          );
        };
      } else {
        reject('Error in importexcel function');
      }
    });
  };

  return (
    <div>
      <Box sx={{ height: 370, width: '100%', mb: 2 }}>
        <DataGrid
          rows={rowsvalue}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
        />
      </Box>
      <Stack direction="row" spacing={2}>
        <Button variant="outlined" onClick={handleDownload}>
          Download
        </Button>

        <section>
          <Input
            type="file"
            id="fileUploadButton"
            style={{ display: 'none' }}
            onChange={ImportExcel}
          />
          <InputLabel htmlfor={'fileUploadButton'}>
            <Button variant="outlined" component="span">
              Upload
            </Button>
          </InputLabel>
        </section>
      </Stack>
    </div>
  );
}
