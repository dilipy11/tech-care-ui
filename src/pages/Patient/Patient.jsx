import React from 'react'
import { Container, Grid2 } from '@mui/material';

import PatientList from './PatientList/PatientList';
import PatientDetails from './PatientDetails/PatientDetails';

import './Patient.module.scss';
import LabResults from './PatientDetails/LabResults';
import DiagnosisHistory from './DiagnosisHistory/DiagnosisHistory';

function Patient() {
  return (
    <React.Fragment>
        <Container maxWidth="xl" sx={{ mt: 3 }} disableGutters>
            <Grid2 container spacing={2}>
                <Grid2 size={3}>
                    <PatientList />
                </Grid2>
                <Grid2 size={6}>
                   <DiagnosisHistory /> 
                </Grid2>
                <Grid2 size={3}>
                    <PatientDetails />
                    <LabResults />
                </Grid2>
            </Grid2>
            
        </Container>
    </React.Fragment>
  )
}

export default Patient
