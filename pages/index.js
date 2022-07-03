import Head from "next/head";
import { useRouter } from "next/router";

import React from "react";

import {
  Spacer,
  Container,
  Button,
  Text,
  Input,
  useInput,
} from "@nextui-org/react";

export default function Home() {
  // Get user input and validate if it's 10 alphanumeric characters
  const { value, reset, bindings } = useInput("");

  const validateUserID = (value) => {
    return value.match("^[0-9A-Za-z]{10}$");
  };

  const helper = React.useMemo(() => {
    if (!value)
      return {
        text: "",
        color: "",
      };
    const isValid = validateUserID(value);
    return {
      text: isValid ? "Valid User ID" : "Enter a 10-digit User ID",
      color: isValid ? "success" : "error",
    };
  }, [value]);

  // Only redirect to survey page if it's valid User ID
  const router = useRouter();

  const startSurvey = (event) => {
    event.preventDefault();

    if (validateUserID(value)) {
      router.push("/survey");
    }
  };

  return (
    <Container>
      <Head>
        <title>Harvard Skills Lab - Leadership Experiment Feedback</title>
        <meta
          name="description"
          content="Survey website created by Harvard Skills Lab"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Text h1>Welcome to Leadership Experiment Feedback</Text>

      <div>
        <Input
          {...bindings}
          clearable
          shadow={false}
          onClearClick={reset}
          status={helper.color}
          color={helper.color}
          helperColor={helper.color}
          helperText={helper.text}
          type="userid"
          label="Your User ID"
          placeholder="0123456ABC"
        />
        <Spacer y={2} />
        <Button onClick={startSurvey} disabled={!validateUserID(value)}>
          Start
        </Button>
      </div>
    </Container>
  );
}
