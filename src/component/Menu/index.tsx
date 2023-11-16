import { Heading } from "../Heading";
import styles from './styles.module.scss';
import classNames from "classnames";
import { HamburgerButton } from "../HamburgerButton";
import { DEFAULT_THEME, Theme } from "../../constants/theme";

export interface MenuProps {
  title: string;
  theme?: Theme;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const Menu = ({ theme, title, isOpen, setIsOpen } : MenuProps) => {
  theme = theme || DEFAULT_THEME;

  return (
    <>
      <HamburgerButton toggle={isOpen} onClick={() => setIsOpen(!isOpen)} theme={theme} />
      <div className={classNames(styles.menu, styles[theme], { [styles.open]: isOpen })}>
        <Heading className={styles.title} headingType="h2" theme={theme}>{ title }</Heading>
      </div>
      {isOpen && <div className={styles.openLayout} onClick={() => setIsOpen(false)}></div>}
    </>
  );
}
