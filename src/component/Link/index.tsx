import classNames from 'classnames';
import { Link as RouterLink } from 'react-router-dom';
import { Theme } from '../../constants/theme';
import styles from './styles.module.scss';

export interface LinkBase {
  href: string;
  children: React.ReactNode;
  isInternal?: boolean;
}

export type LinkProps = LinkBase & {
  className?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement> | undefined;
  theme: Theme;
}

export const Link = ({ children, className, href, isInternal, onClick, theme }: LinkProps) => { 
  isInternal = isInternal || false;
  const classes = classNames(styles.link, className, styles[theme]);

  if (isInternal) {
    return <RouterLink className={classes} to={href} onClick={onClick}>{children}</RouterLink>;
  } else {
    return <a className={classes} href={href} onClick={onClick}>{children}</a>;
  }
};
