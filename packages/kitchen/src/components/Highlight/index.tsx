import React from "react";
import styled from "styled-components";
import usePrevious from "../../hooks/usePrevious";
import { isUnplacedRect, ReactiveDomReact } from "../../hooks/useRect";
import withScale from "../../hoc/withScale";
import { KitchenComponent } from "../../types";

export type HighlightProps = KitchenComponent & {
  rect: ReactiveDomReact;
  visible?: boolean;
  hoverHeightRatio?: number;
  hoverWidthRatio?: number;
  activeOpacity?: number;
};

export type HighlightPosition = {
  width: string;
  left: string;
  height: string;
  top: string;
  transition: string;
};

const Highlight = styled(
  ({
    rect,
    visible,
    hoverHeightRatio = 1,
    hoverWidthRatio = 1,
    activeOpacity = 0.8,
    ...props
  }: HighlightProps) => {
    const ref = React.useRef<HTMLDivElement | null>(null);
    const isFirstVisible = usePrevious<boolean>(isUnplacedRect(rect));
    const width = rect.width * hoverWidthRatio;
    const height = rect.height * hoverHeightRatio;
    return (
      <Container
        ref={ref}
        width={width}
        height={height}
        left={rect.left + (rect.width - width) / 2}
        top={rect.elementTop + (rect.height - height) / 2}
        transition={isFirstVisible ? "opacity" : "opacity, width, left, top"}
        visible={visible}
        activeOpacity={activeOpacity}
        {...props}
      />
    );
  }
)<HighlightProps>`
  opacity: ${({ visible, activeOpacity }) => (visible ? activeOpacity : 0)};
`;

const Container = styled.div<HighlightPosition>`
  position: absolute;
  background-color: ${({ theme }) => theme.colors.layout.dark};
  border-radius: 3px;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  left: ${({ left }) => left}px;
  top: ${({ top }) => top}px;
  transition: 0.15s ease;
  transition-property: ${({ transition }) => transition};
`;

export default withScale(Highlight);
