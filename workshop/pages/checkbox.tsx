import { Checkbox, Container, useCheckbox } from "kitchn";
import { NextPage } from "next";
import React from "react";

const CheckboxPage: NextPage = () => {
  const [checked1, toggle1] = useCheckbox();
  const [checked2, toggle2] = useCheckbox(true);
  const [checked3, toggle3] = useCheckbox();
  const [checked4, toggle4] = useCheckbox();
  const [checked5, toggle5] = useCheckbox();
  const [checked6, toggle6] = useCheckbox();

  return (
    <Container
      gap={15}
      style={{
        maxWidth: 700,
        margin: "0 auto",
      }}
    >
      <Container>
        <p>{"default"}</p>
        <Checkbox checked={checked1} onChange={toggle1}>
          {"Option 1\r"}
        </Checkbox>
      </Container>
      <Container>
        <p>{"checked"}</p>
        <Checkbox checked={checked2} onChange={toggle2}>
          {"Option 2\r"}
        </Checkbox>
      </Container>
      <Container>
        <p>{"no label"}</p>
        <Checkbox checked={checked3} onChange={toggle3} />
      </Container>
      <Container>
        <p>{"disabled"}</p>
        <Container>
          <Container>
            <Checkbox disabled>{"Disabled"}</Checkbox>
          </Container>

          <Container>
            <Checkbox disabled checked>
              {"Disabled Checked\r"}
            </Checkbox>
          </Container>

          <Container>
            <Checkbox disabled indeterminate>
              {"Disabled Indeterminate\r"}
            </Checkbox>
          </Container>
        </Container>
      </Container>
      <Container>
        <p>{"indeterminate"}</p>
        <Checkbox indeterminate>{"Indeterminate"}</Checkbox>
      </Container>
      <Container>
        <p>{"overflowing text"}</p>
        <Checkbox checked={checked4} onChange={toggle4}>
          {"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\r"}
          {
            "eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad\r"
          }
          {"minim veniam, quis nostrud exercitation ullamco laboris nisi ut\r"}
          {"aliquip ex ea commodo consequat. Duis aute irure dolor in\r"}
          {
            "reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla\r"
          }
          {
            "pariatur. Excepteur sint occaecat cupidatat non proident, sunt in\r"
          }
          {"culpa qui officia deserunt mollit anim id est laborum\r"}
        </Checkbox>
      </Container>
      <Container>
        <p>{"full width"}</p>
        <Checkbox checked={checked5} onChange={toggle5} fullWidth>
          {"Full Width\r"}
        </Checkbox>
      </Container>
      <Container>
        <p>{"label"}</p>
        <Checkbox label={"Checkbox"} checked={checked6} onChange={toggle6}>
          {"Click me\r"}
        </Checkbox>
      </Container>
      <Container>
        <p>{"Text Styles"}</p>
        <Checkbox style={{ fontSize: 30 }}>{"Arbitrary text styles."}</Checkbox>
      </Container>
    </Container>
  );
};

export default CheckboxPage;
