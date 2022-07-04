import { useRouter } from "next/router";
import React from "react";

import {
  Container,
  Dropdown,
  Textarea,
  Text,
  Button,
  Spacer,
  useInput,
} from "@nextui-org/react";

export default function Survey() {
  // Get userID from query data
  const router = useRouter();
  const data = router.query;
  console.log(data);

  // For select Year of Birth
  const [selected, setSelected] = React.useState(new Set());
  const selectedValue = React.useMemo(
    () => Array.from(selected).join(", ").replaceAll("_", " "),
    [selected]
  );
  const curYearMinus = (num) => {
    return new Date().getFullYear() - num;
  };
  const allYears = Array.from(Array(120).keys()).map(curYearMinus);

  // Get user employment status input and validate if it's empty
  const { value: employStatus, bindings: esBindings } = useInput("");
  const { value: feedback, bindings: fbBindings } = useInput("");

  const isNonEmpty = (value) => {
    if (!value || value === "") {
      return false;
    }
    return true;
  };

  // Only redirect to api/record page if it's not empty
  const recordFeedback = async (event) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault();
    // console.log(selectedValue);
    // console.log(employStatus);
    // console.log(feedback);

    if (
      isNonEmpty(selectedValue) &&
      isNonEmpty(employStatus) &&
      isNonEmpty(feedback)
    ) {
      const res = await fetch("/api/record", {
        body: JSON.stringify({
          userID: data.userID,
          yearOfBirth: selectedValue,
          employStatus: employStatus,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });
      const result = await res.json();
      alert(`Is this your full name: ${result.name}`);
    }
  };

  return (
    <Container sm>
      <Spacer y={2} />
      <h2>Questions for:</h2>
      <Text h4 color="primary">
        {data.userID}
      </Text>
      <Spacer y={2} />
      <form onSubmit={recordFeedback}>
        <h4>What is your year of birth?</h4>
        <Dropdown>
          <Dropdown.Button flat color="default" css={{ tt: "capitalize" }}>
            {selectedValue}
          </Dropdown.Button>
          <Dropdown.Menu
            color="default"
            disallowEmptySelection
            selectionMode="single"
            selectedKeys={selected}
            onSelectionChange={setSelected}
          >
            {allYears.map((year) => {
              return (
                <Dropdown.Item key={year.toString()}>
                  {year.toString()}
                </Dropdown.Item>
              );
            })}
          </Dropdown.Menu>
        </Dropdown>

        <Spacer y={1} />
        <h4>What is your employment status?</h4>
        <Textarea
          {...esBindings}
          bordered
          aria-label="employStatus"
          width="600px"
          placeholder="Your employment status"
        />

        <Spacer y={1} />
        <h4>What is your feedback on the experiment UI?</h4>
        <Textarea
          {...fbBindings}
          bordered
          aria-label="feedback"
          width="600px"
          placeholder="Your experiment feedback"
        />

        <Spacer y={3} />
        <Button
          type="submit"
          disabled={
            !(
              isNonEmpty(selectedValue) &&
              isNonEmpty(employStatus) &&
              isNonEmpty(feedback)
            )
          }
        >
          Submit
        </Button>
      </form>
    </Container>
  );
}
