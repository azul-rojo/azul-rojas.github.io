import { Heading } from "../Heading";
import styles from './styles.module.scss';
import classNames from "classnames";
import { HamburgerButton } from "../HamburgerButton";
import { DEFAULT_THEME, Theme } from "../../constants/theme";
import { Link, LinkProps } from "../Link";

export interface MenuProps {
  title: string;
  theme?: Theme;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  linkSections: {
    sectionName: string;
    links: LinkProps[];
  }[]
}

export const Menu = ({ theme, title, isOpen, setIsOpen, linkSections } : MenuProps) => {
  theme = theme || DEFAULT_THEME;

  return (
    <>
      <HamburgerButton toggle={isOpen} onClick={() => setIsOpen(!isOpen)} theme={theme} />
      <div className={classNames(styles.menu, styles[theme], { [styles.open]: isOpen })}>
        <Heading className={styles.title} headingType="h2" theme={theme}>{title}</Heading>
        {linkSections.map((section, index) => {
          const { sectionName, links } = section;
          const sectionKey = `${section}-${index}`;

          return (
            <div key={sectionKey}>
              <Heading headingType='h3'>{sectionName}</Heading>
              {links.map((linkProps, linkIndex) => {
                const linkKey = sectionKey + linkIndex;

                return (
                  <Link {...linkProps} key={linkKey} />
                )
               })}
            </div>
          )
        })}
      </div>
      {isOpen && <div className={styles.openLayout} onClick={() => setIsOpen(false)}></div>}
    </>
  );
}
