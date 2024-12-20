import * as React from "react";
import { Box, Divider, Grid, Grid2, Stack, Typography } from "@mui/material";
import { LineChart } from "@mui/x-charts/LineChart";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import RespiratoryRateImg from '../../../assets/respiratory-rate.svg';
import TemperatureImg from '../../../assets/temperature.svg';
import HeartBPMImg from '../../../assets/heartBPM.svg';
import DiagnosticList from "./DiagnosticList";

const uData = [120, 118, 160, 115, 148, 158];
const pData = [110, 62, 115, 90, 70, 78];
const xLabels = [
  "Oct 2023",
  "Nov 2023",
  "Dec 2023",
  "Jan 2024",
  "Feb 2024",
  "Mar 2024",
];

const styles = {
  blueDot: {
    height: "12px",
    width: "12px",
    backgroundColor: "#7E6CAB",
    borderRadius: "100%",
  },
  purpleDot: {
    height: "12px",
    width: "12px",
    backgroundColor: "#E66FD2",
    borderRadius: "100%",
  },
};

function DiagnosisHistory() {
  return (
    <React.Fragment>
      <Box
        sx={{
          backgroundColor: "#ffffff",
          borderRadius: "12px",
          padding: "12px",
        }}
      >
        <h2 style={{ margin: "0", paddingBottom: "30px" }}>
          Diagnosis History
        </h2>

        <Box
          sx={{
            width: "100%",
            backgroundColor: "#F4F0FE",
            borderRadius: "12px",
          }}
        >
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="start"
            padding={2}
          >
            <Box>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <h4 style={{ margin: 0 }}>Blood Pressure</h4>
                <Typography
                  variant="body2"
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  {" "}
                  Last 6 months <KeyboardArrowDownIcon fontSize="small" />
                </Typography>
              </Stack>
              <Box>
                <LineChart
                  width={500}
                  height={300}
                  series={[
                    { data: pData, color: "#7E6CAB" },
                    { data: uData, color: "#C26EB4" },
                  ]}
                  xAxis={[{ scaleType: "point", data: xLabels }]}
                />
              </Box>
            </Box>

            <Box>
              <Stack direction="row" gap={0} justifyContent="start">
                <Box>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                      fontWeight: "bold",
                    }}
                  >
                    {" "}
                    <div style={styles.purpleDot}> </div>Systolic
                  </Typography>
                  <Typography variant="h5" sx={{ py: 1 }}>
                    160
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ display: "flex", alignItems: "center", gap: "1px" }}
                  >
                    {" "}
                    <ArrowDropUpIcon fontSize="small" /> Higher than Average
                  </Typography>
                  <Divider sx={{ pt: 2 }}></Divider>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                      fontWeight: "bold",
                      pt: 1,
                    }}
                  >
                    {" "}
                    <div style={styles.blueDot}> </div>Diastolic
                  </Typography>
                  <Typography variant="h5" sx={{ py: 1 }}>
                    78
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ display: "flex", alignItems: "center", gap: "1px" }}
                  >
                    {" "}
                    <ArrowDropDownIcon fontSize="small" /> Lower than Average
                  </Typography>
                </Box>
              </Stack>
            </Box>
          </Stack>
        </Box>
        <Grid2 container spacing={2} sx={{mt:2}}>
            <Grid2 size={4}>
                <Box sx={{backgroundColor:"#E0F3FA", borderRadius:"12px", p:2 }}>
                  <img src={RespiratoryRateImg} alt=""/>
                  <Typography variant="body1" color="#072635">Respiratory Rate</Typography>
                  <Typography variant="h5" fontSize="30px" color="#072635" fontWeight="bold" paddingBottom={1}>20 bpm</Typography> 
                  <Typography variant="body2" fontSize={12} color="#072635">Normal</Typography>
                </Box>
            </Grid2>
            <Grid2 size={4}>
            <Box sx={{backgroundColor:"#FFE6E9", borderRadius:"12px", p:2 }}>
                  <img src={TemperatureImg} alt=""/>
                  <Typography variant="body1" color="#072635">Temperature</Typography>
                  <Typography variant="h5" fontSize="30px" color="#072635" fontWeight="bold" paddingBottom={1}>98.6°F</Typography> 
                  <Typography variant="body2" fontSize={12} color="#072635">Normal</Typography>
                </Box>
            </Grid2>
            <Grid2 size={4}>
            <Box sx={{backgroundColor:"#FFE6F1", borderRadius:"12px", p:2 }}>
                  <img src={HeartBPMImg} alt=""/>
                  <Typography variant="body1" color="#072635">Heart Rate</Typography>
                  <Typography variant="h5" fontSize="30px" color="#072635" fontWeight="bold" paddingBottom={1}>78 bpm</Typography> 
                  <Typography
                    variant="body2" fontSize={12}
                    sx={{ display: "flex", alignItems: "center", gap: "1px" }}
                  >
                    
                    <ArrowDropDownIcon fontSize="small" /> Lower than Average
                  </Typography>
                </Box>
            </Grid2>
        </Grid2>
      </Box>

      <Box
       sx={{
        backgroundColor: "#ffffff",
        borderRadius: "12px",
        padding: "12px",
        marginTop:"20px",
        marginBottom:"20px",
      }}
    >
      <h2 style={{ margin: "0", paddingBottom: "30px" }}>
        Diagnosis List
      </h2>
          <DiagnosticList />
        </Box>
    </React.Fragment>
  );
}

export default DiagnosisHistory;
