import { createElement } from "react";
import classNames from "classnames";
import styles from './styles.module.scss';

interface HeadingProps {
  className: string;
  headingType: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  text: string;
}

export const Heading = ({ className, headingType, text }: HeadingProps) => {
  const headingClassNames = classNames(className, styles.heading); 

  return createElement(
    headingType,
    { className: headingClassNames },
    text
  );
};
