import React from "react";

import Input, { InputProps } from "..";
import { withDecorator } from "../../../hoc";
import { KitchnComponent } from "../../../types";
import Container from "../../Container";
import { Menu } from "../../Menu";

export type PhoneInputProps = KitchnComponent<object, InputProps>;

const PhoneInputComponent = ({ ...props }: PhoneInputProps) => {
  return (
    <Menu.Container>
      <Input
        prefix={
          <Container
            h={"100%"}
            w={"100%"}
            align={"center"}
            justify={"center"}
            cursor={"pointer"}
          >
            {"🇫🇷 +33"}
          </Container>
        }
        htmlType={"tel"}
        {...props}
      />
    </Menu.Container>
  );
};

PhoneInputComponent.displayName = "KitchnControlledInput";
export const PhoneInput = withDecorator(PhoneInputComponent);
export default PhoneInput;
