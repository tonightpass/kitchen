export type KitchenComponent = {
  /**
   * The root element.
   */
  as?: React.ElementType;
  /**
   * The content, duh.
   */
  children?: React.ReactNode;
} & React.HTMLAttributes<HTMLElement>;

export type NormalSizes = "small" | "normal" | "large";
