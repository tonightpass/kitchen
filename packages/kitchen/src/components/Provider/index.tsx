import React from "react";
import { DefaultTheme } from "styled-components";
import { ThemeProvider } from "../../contexts/Theme";
import GlobalStyle from "../GlobalStyle";

export type KitchenProviderProps = {
  children?: React.ReactNode;
  theme?: DefaultTheme;
};

const KitchenProvider: React.FC<KitchenProviderProps> = ({
  children,
  theme,
}: KitchenProviderProps) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default KitchenProvider;
