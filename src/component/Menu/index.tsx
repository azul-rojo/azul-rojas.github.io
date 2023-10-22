import { Heading } from "../Heading";
import styles from './styles.module.scss';
import { useState } from "react";
import classNames from "classnames";
import { HamburgerButton } from "../HamburgerButton";
import { DEFAULT_THEME, Theme } from "../../constants/theme";

export interface MenuProps {
  title: string;
  theme?: Theme;
}

export const Menu = ({ theme, title } : MenuProps) => {
  theme = theme || DEFAULT_THEME;
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <HamburgerButton toggle={isOpen} onClick={() => setIsOpen(!isOpen)} theme={theme} />
      <div className={classNames(styles.menu, styles[theme], { [styles.open]: isOpen })}>
        <Heading className={styles.title} headingType="h1" text={title} theme={theme} />
      </div>
    </>
  );
}
