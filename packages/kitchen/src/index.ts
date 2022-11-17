import "./types/styled-components";
import kitchen from "styled-components";

import KitchenDocument from "./components/Document";
import KitchenProvider from "./components/Provider";
import Button from "./components/Button";
import Checkbox from "./components/Checkbox";
import Code from "./components/Code";
import Container from "./components/Container";
import OrderedList from "./components/OrderedList";
import UnorderedList from "./components/UnorderedList";
import ListItem from "./components/ListItem";
import Icon from "./components/Icon";
import InlineCode from "./components/InlineCode";
import Spinner from "./components/Spinner";
import Text from "./components/Text";

import withKitchen from "./hoc/withKitchen";

export {
  KitchenDocument,
  KitchenProvider,
  Button,
  Checkbox,
  Code,
  Container,
  Icon,
  InlineCode,
  OrderedList,
  ListItem,
  UnorderedList,
  Spinner,
  Text,
  withKitchen,
};
export default kitchen;
