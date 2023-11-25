import classNames from 'classnames';
import { Link as RouterLink } from 'react-router-dom';
import styles from './styles.module.scss';

export interface LinkProps {
  children: React.ReactNode;
  className?: string;
  href: string;
  isInternal?: boolean;
  onClick?: React.MouseEventHandler<HTMLAnchorElement> | undefined;
}

export const Link = ({ children, className, href, isInternal, onClick }: LinkProps) => { 
  isInternal = isInternal || false;
  const classes = classNames(styles.link, className);

  if (isInternal) {
    return <RouterLink className={classes} to={href} onClick={onClick}>{children}</RouterLink>;
  } else {
    return <a className={classes} href={href} onClick={onClick}>{children}</a>;
  }
};
