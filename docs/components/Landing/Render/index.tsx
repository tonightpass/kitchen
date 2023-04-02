import { Sandpack } from "@codesandbox/sandpack-react";
import { nightOwl } from "@codesandbox/sandpack-themes";
import kitchen, { Container, useTheme } from "@tonightpass/kitchen";

const Render: React.FC = () => {
  const { theme } = useTheme();

  const code = `import { KitchenProvider, Button, Container, Image, Text } from "@tonightpass/kitchen";

import "@tonightpass/kitchen/fonts.css";

export default function App() {
  return (
    <KitchenProvider>
      <Container h={"100vh"} align={"center"} justify={"center"}>
        <Container maxW={245}>
          <Image
            src={
              "https://unsplash.com/photos/RUvW1KGD9a4/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MTB8fGNoYW1icmV8ZnJ8MHx8fHwxNjgwNDcwNjM2&w=640"
            }
            br={"square"}
            alt={"Example"}
            w={"100%"}
          />
          <Container
            mt={"small"}
            align={"center"}
            justify={"space-between"}
            row
          >
            <Text weight={"bold"}>Apartment in Paris</Text>
            <Text>
              ⭐ <Text weight={"bold"}>4.9</Text> (20)
            </Text>
          </Container>
          <Container mt={"tiny"}>
            <Text color={"lighter"}>Large 2 rooms flat with a terrace</Text>
            <Text color={"lighter"}>1 king bed</Text>
            <Text color={"lighter"}>Aug 19 - 26</Text>
          </Container>
          <Text color={"lighter"} mt={"tiny"}>
            <Text color={"lighter"} decoration={"line-through"}>
              $114
            </Text>{" "}
            <Text color={"lightest"} weight={"bold"}>
              $120
            </Text>{" "}
            <Text color={"lightest"}>{"night ·"}</Text> $735 total
          </Text>
          <Container>
            <Button mt={"small"} w={"100%"}>
              Book now
            </Button>
          </Container>
        </Container>
      </Container>
    </KitchenProvider>
  );
}`;

  return (
    <StyledContainer id={"render"} section>
      <Sandpack
        template={"react-ts"}
        theme={theme.id === 2 ? "light" : nightOwl}
        options={{
          editorHeight: 600,
        }}
        files={{
          "/App.tsx": code,
        }}
        customSetup={{
          dependencies: {
            "@tonightpass/kitchen": "latest",
          },
        }}
      />
    </StyledContainer>
  );
};

const StyledContainer = kitchen(Container)`
  border-radius: ${({ theme }) => theme.radius.square};
  overflow: hidden;
  font-family: ${({ theme }) => theme.family.monospace};
  font-size: 14px;
  body, div, span, input, button, textarea, select, option {
    font-family: inherit;
    font-size: inherit;
  }
`;

export default Render;
