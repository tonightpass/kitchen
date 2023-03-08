// styled-components
import "./types/styled-components";
import { default as kitchen } from "styled-components/native";
export type { DefaultTheme } from "styled-components/native";

// eslint-disable-next-line @typescript-eslint/no-var-requires
export const ReactNative = require("react-native") as Awaited<
  typeof import("react-native")
>;

// ./themes
export { default as themes, createTheme } from "./themes";

// ./components
export { default as KitchenProvider } from "./components/Provider";
export type { KitchenProviderProps } from "./components/Provider";

export { default as Text } from "./components/Text";
export type { TextProps } from "./components/Text";

// ./hooks
export { default as useTheme } from "./hooks/useTheme";

// .hoc
export { default as withScale } from "./hoc/withScale";
export type { ScaleProps } from "./hoc/withScale";

export default kitchen;
