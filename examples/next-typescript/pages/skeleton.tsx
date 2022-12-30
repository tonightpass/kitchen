import { Skeleton, Container, Button } from "@tonightpass/kitchen";
import { NextPage } from "next";
import React from "react";
import styled from "styled-components";

const SkeletonPage: NextPage = () => {
  return (
    <>
      <Container
        gap={10}
        style={{
          maxWidth: 700,
          margin: "0 auto",
          marginTop: "15px",
        }}
      >
        <p>default with set width</p>
        <Skeleton width={160} />
      </Container>
      <Container
        gap={10}
        style={{
          maxWidth: 700,
          margin: "0 auto",
          marginTop: "15px",
        }}
      >
        <p>default with box height</p>
        <Skeleton width={160} boxHeight={42} />
      </Container>
      <Container
        gap={10}
        style={{
          maxWidth: 700,
          margin: "0 auto",
          marginTop: "15px",
        }}
      >
        <p>wrapping children</p>
        <Skeleton>
          <TestButton>Hidden by skeleton</TestButton>
        </Skeleton>

        <Skeleton show={false}>
          <Button>Not hidden by skeleton</Button>
        </Skeleton>
      </Container>
      <Container
        gap={10}
        style={{
          maxWidth: 700,
          margin: "0 auto",
          marginTop: "15px",
        }}
      >
        <p>wrapping children with fixed size</p>
        <Skeleton width="100%" height={100}>
          {null}
        </Skeleton>

        <Skeleton width="100%" height={100} show={false}>
          <TestButton width="200px">Not hidden by Skeleton</TestButton>
        </Skeleton>
      </Container>
      <Container
        gap={10}
        style={{
          maxWidth: 700,
          margin: "0 auto",
          marginTop: "15px",
        }}
      >
        <p>normal</p>
        <Skeleton shape="normal" width={48} />
      </Container>
      <Container
        gap={10}
        style={{
          maxWidth: 700,
          margin: "0 auto",
          marginTop: "15px",
        }}
      >
        <p>round</p>
        <Skeleton shape="round" width={48} height={48} boxHeight={48} />
      </Container>
      <Container
        gap={10}
        style={{
          maxWidth: 700,
          margin: "0 auto",
          marginTop: "15px",
        }}
      >
        <p>square</p>
        <Skeleton shape="square" width={48} height={48} boxHeight={48} />
      </Container>
      <Container
        gap={10}
        style={{
          maxWidth: 700,
          margin: "0 auto",
          marginTop: "15px",
        }}
      >
        <p>no animation</p>
        <Skeleton width="100%" height={100} animated={false}>
          {null}
        </Skeleton>
      </Container>
    </>
  );
};

const TestButton = styled(Button)``;

export default SkeletonPage;
