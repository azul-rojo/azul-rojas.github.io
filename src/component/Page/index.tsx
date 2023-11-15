// this component defines the padding for the page view
import classNames from 'classnames';
import styles from './styles.module.scss';


interface PageProps {
  children: React.ReactNode;
}

export const Page = ({ children }: PageProps) => {
  return <main className={classNames(styles.page)}>{children}</main>
}
