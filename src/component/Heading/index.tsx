import { createElement } from "react";
import classNames from "classnames";
import styles from './styles.module.scss';
import { DEFAULT_THEME, Theme } from "../../constants/theme";

interface HeadingProps {
  className: string;
  headingType: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  text: string;
  theme?: Theme;
}

export const Heading = ({ className, headingType, text, theme }: HeadingProps) => {
  theme = theme || DEFAULT_THEME;
  const headingClassNames = classNames(className, styles.heading, styles[theme]); 

  return createElement(
    headingType,
    { className: headingClassNames },
    text
  );
};
