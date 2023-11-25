import classNames from 'classnames';
import { Link as RouterLink } from 'react-router-dom';
import styles from './styles.module.scss';

export interface LinkProps {
  children: React.ReactNode;
  className?: string;
  href: string;
  isInternal?: boolean;
}

export const Link = ({ children, className, href, isInternal }: LinkProps) => { 
  isInternal = isInternal || false;
  const classes = classNames(styles.link, className);

  if (isInternal) {
    return <RouterLink  to={'/survivalkits'}>test</RouterLink>;
  } else {
    return <a className={classes} href={href}>{children}</a>;
  }
};
