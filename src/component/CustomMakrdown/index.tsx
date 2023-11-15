import Markdown from 'react-markdown'
import { Theme } from '../../constants/theme';
import { Heading } from '../Heading';
import { Line } from '../Line';

interface CustomMarkdownProps {
  children: string;
  theme: Theme
}

export const CustomMarkdown = ({ children, theme }: CustomMarkdownProps) => {
  return <Markdown
    components={{
      h1(props) {
        const { children } = props;
        return <Heading theme={theme}>{children}</Heading>
      },
      h2(props) {
        const { children } = props; 
        return <Heading theme={theme} headingType='h2'>{children}</Heading>
      },
      hr() {
        return <Line theme={theme}></Line>
      }
    }}
  >{children}</Markdown>;
}
