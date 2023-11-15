import classNames from "classnames";
import { Theme } from "../../constants/theme";
import styles from './styles.module.scss';

interface LineProps {
  theme: Theme;
}

export const Line = ({ theme }: LineProps) => {
  theme = theme || Theme.default;
  return <div className={classNames(styles[theme], styles.line)}></div>
};
