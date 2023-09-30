import { Heading } from "../Heading";
import styles from './styles.module.scss';

export interface MenuProps {
  title: string;
}

export const Menu = ({ title } : MenuProps) => {
  return (
    <div className={styles.menu}>
      <Heading className="menu" headingType="h1" text={title} />
    </div>
  );
}
