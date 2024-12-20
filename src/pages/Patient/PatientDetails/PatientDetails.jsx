import React, { useState, useEffect } from "react";
import { Box, Button, Stack } from "@mui/material";
import birthimg from "../../../assets/birthIcon.svg";
import genderImg from "../../../assets/femaleIcon.svg";
import phoneImg from "../../../assets/phoneIcon.svg";
import insuranceImg from "../../../assets/insuranceIcon.svg";

const styles = {
  profilePicture: {
    width: "200px",
    height: "200px",
    borderRadius: "50%",
    marginRight: "20px",
  },
  info: {
    flex: 1,
    textAlign: "left",
  },
  name: {
    margin: "0 0 10px 0",
    color: "#333",
    textAlign: "center",
  },
};

const PatientDetails = () => {
  const [patientData, setPatientData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPatientData = async () => {
      try {
        const username = "coalition";
        const password = "skills-test";
        const encodedAuth = btoa(`${username}:${password}`);

        const response = await fetch(
          "https://fedskillstest.coalitiontechnologies.workers.dev",
          {
            method: "GET",
            headers: {
              Authorization: `Basic ${encodedAuth}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }

        const data = await response.json();

        const selectedPatientData = data.find(
          (patient) => patient.name === "Jessica Taylor"
        );

        if (!selectedPatientData) {
          throw new Error("Selected patient is not found in the data.");
        }

        setPatientData(selectedPatientData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPatientData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return patientData ? (
    <Box
      sx={{
        backgroundColor: "#ffffff",
        borderRadius: "16px",
        textAlign: "center",
        padding: "30px",
      }}
    >
      <img
        src={patientData.profile_picture}
        alt={`${patientData.name}'s profile`}
        style={styles.profilePicture}
      />
      <div style={styles.info}>
        <h2 style={styles.name}>{patientData.name}</h2>
        <Stack direction="row" gap={2} alignItems="center">
          <img src={birthimg} alt="" />
          <p>
            Date of Birth
            <br />
            <strong>{patientData.date_of_birth}</strong>
          </p>
        </Stack>
        <Stack direction="row" gap={2} alignItems="center">
          <img src={genderImg} alt="" />
          <p>
            Gender <br />
            <strong>{patientData.gender}</strong>
          </p>
        </Stack>
        <Stack direction="row" gap={2} alignItems="center">
          <img src={phoneImg} alt="" />
          <p>
            Phone Number
            <br />
            <strong> {patientData.phone_number}</strong>
          </p>
        </Stack>
        <Stack direction="row" gap={2} alignItems="center">
          <img src={phoneImg} alt="" />
          <p>
            Emergency Contact <br />
            <strong>{patientData.emergency_contact}</strong>
          </p>
        </Stack>
        <Stack direction="row" gap={2} alignItems="center">
          <img src={insuranceImg} alt="" />
          <p>
            Insurance Type
            <br />
            <strong>{patientData.insurance_type}</strong>
          </p>
        </Stack>
      </div>
      <Button
        sx={{
          backgroundColor: "#01F0D0",
          borderRadius: "20px",
          color: "#000",
          px: 5,
          textTransform: "capitalize",
          fontWeight: "bold",
          mt: 2,
        }}
      >
        Show All Information
      </Button>
    </Box>
  ) : (
    <p>No data available for selected patient.</p>
  );
};

export default PatientDetails;
