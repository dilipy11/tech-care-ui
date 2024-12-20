import * as React from 'react';
import { DataGrid} from '@mui/x-data-grid';

import './DiagnosticList.module.scss';

const rows =  [
    { id: 1, col1: 'Hypertension', col2: 'Chronic high blood pressure', col3: 'Under Observation' },
    { id: 2, col1: 'Type 2 Diabetes', col2: 'Insulin resistance and elevated blood sugar', col3: 'Cured' },
    { id: 3, col1: 'Asthma', col2: 'Recurrent episodes of bronchial constriction', col3: 'Inactive' },
  ];
  
  const columns = [
    { field: 'col1', headerName: 'Problem/Diagnosis', width: 150 },
    { field: 'col2', headerName: 'Description', flex: 1 },
    { field: 'col3', headerName: 'Status', width: 150 },
  ];

function DiagnosticList() {
  return (
    <div style={{ height: 300, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} 
       
      />
    </div>
  )
}

export default DiagnosticList
