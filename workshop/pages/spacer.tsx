import { Spacer, Container, Text } from "kitchn";
import { NextPage } from "next";
import React from "react";

const SpacerPage: NextPage = () => {
  return (
    <>
      <Container
        gap={10}
        style={{
          maxWidth: 700,
          margin: "0 auto",
        }}
      >
        <Text>{"vertical"}</Text>
        <Container gap={24}>
          <Container style={{ background: "lime" }}>
            <Spacer y={1} />
          </Container>

          <Container style={{ background: "lime" }}>
            <Spacer y={2} />
          </Container>

          <Container style={{ background: "lime" }}>
            <Spacer y={3} />
          </Container>
        </Container>

        <Text>{"horizontal"}</Text>
        <Container row>
          <Container h={"large"} flex={1} style={{ background: "lime" }} row />
          <Spacer x={3} />
          <Container h={"large"} flex={1} style={{ background: "lime" }} />
          <Spacer x={"large"} />
          <Container h={"large"} flex={1} style={{ background: "lime" }} />
        </Container>
      </Container>
    </>
  );
};

export default SpacerPage;
