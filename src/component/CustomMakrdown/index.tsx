import classNames from 'classnames';
import Markdown from 'react-markdown'
import { Theme } from '../../constants/theme';
import { Heading } from '../Heading';
import { Line } from '../Line';
import { Text } from '../Text';
import styles from './styles.module.scss';

interface CustomMarkdownProps {
  children: string;
  theme: Theme
  className?: string;
}

export const CustomMarkdown = ({ children, theme, className }: CustomMarkdownProps) => {
  const componentClassName = classNames(className, styles.component);

  return <Markdown
    components={{
      h1(props) {
        const { children } = props;

        return <Heading className={componentClassName} theme={theme}>{children}</Heading>
      },
      h2(props) {
        const { children } = props;

        return <Heading className={componentClassName} theme={theme} headingType='h2'>{children}</Heading>
      },
      hr() {
        return <Line className={componentClassName} theme={theme}></Line>
      },
      p(props) {
        const { children } = props;

        return <Text className={componentClassName} theme={theme}>{children}</Text>
      }
    }}
  >{children}</Markdown>;
}
