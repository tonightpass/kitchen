import React from "react";
import dynamic from "next/dynamic";
import { useTheme } from "@tonightpass/kitchen";

const DynamicLive = dynamic(() => import("./dynamic-live"), {
  ssr: false,
  loading: () => (
    <div style={{ padding: "20pt 0" }}>
      {/* TODO: Use the loading */}
      Loading...
    </div>
  ),
});

export type PlaygroundProps = {
  title?: React.ReactNode | string;
  desc?: React.ReactNode | string;
  code: string;
  scope: {
    [key: string]: any;
  };
};

const defaultProps = {
  desc: "",
  code: "",
  bindings: {},
};

const Playground: React.FC<PlaygroundProps> = React.memo(
  ({ code: inputCode, scope }: PlaygroundProps & typeof defaultProps) => {
    const theme = useTheme();
    const code = inputCode.trim();

    return (
      <>
        <div className="playground">
          <DynamicLive code={code} scope={scope} />
          <style jsx>{`
            .playground {
              margin-top: 20px;
              width: 100%;
              border-radius: 8px;
              border: 1px solid ${theme.colors.layout.dark};
            }
          `}</style>
        </div>
      </>
    );
  }
);

Playground.defaultProps = defaultProps;
Playground.displayName = "Playground";
export default Playground;