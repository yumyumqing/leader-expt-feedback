import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";

import { Container, Card, Row, Text, Spacer } from "@nextui-org/react";

import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { TextField } from "@mui/material";

export default function Survey() {
  // Get userID from query data
  const router = useRouter();
  const data = router.query;
  console.log(data);

  // For date of birth picker
  const [dob, setDob] = useState();

  const handleDobChange = (newDob) => {
    setDob(newDob);
  };

  return (
    <Container sm>
      <Spacer y={2} />
      <h2>Questions</h2>
      <h3>User: {data.userID}</h3>
      <Spacer y={1} />
      <h4>What is your date of birth?</h4>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DesktopDatePicker
          inputFormat="MM/dd/yyyy"
          value={dob}
          onChange={handleDobChange}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
      <Spacer y={1} />
      <form action="/survey" method="post">
        <input type="text" id="first" name="first" />
        <input type="text" id="last" name="last" />
        <button type="submit">Submit</button>
      </form>
    </Container>
  );
}
