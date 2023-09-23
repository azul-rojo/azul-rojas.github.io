import classNames from 'classnames';
import styles from './styles.module.scss';

interface TextProps {
  className?: string;
  children: string;
}

export const Text = ({ children, className }: TextProps) => { 
  return (
    <p className={classNames(className, styles.text)}>
      {children}
    </p>
  );
};
