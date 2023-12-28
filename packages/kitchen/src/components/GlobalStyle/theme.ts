import { css } from "styled-components";

import { PREFIX } from "../../constants";
import { convertThemeToCssVariables } from "../../themes";
import { Themes } from "../../types";

const generateThemeCss = (themes: Themes, theme: keyof Themes) => {
  theme = theme.trim();

  return `
    [data-theme="${theme}"] {
      ${convertThemeToCssVariables(themes[theme], PREFIX)}
    }
  `;
};

const themeCss = css<{ staticThemes: Themes }>`
  ${({ staticThemes }) => `
    :root {
      ${convertThemeToCssVariables(staticThemes.light, PREFIX)}
    }

    ${Object.keys(staticThemes)
      .filter((theme) => theme !== "light")
      .map((theme) => generateThemeCss(staticThemes, theme))}
  `}
`;

export default themeCss;
