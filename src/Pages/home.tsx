import home from './home.md';
import { useContext, useEffect, useState } from 'react';
import { CustomMarkdown } from '../component/CustomMakrdown';
import { Page } from '../component/Page';
import { GlobalContext } from '../GlobalContext';


export const Home = () => {
  const [content, setContent] = useState('');
  const { theme } = useContext(GlobalContext);

  useEffect(() => {
    fetch(home)
      .then(res => res.text())
      .then((t) => {
        setContent(t as unknown as string);
      })
  }, [])

  return <Page theme={theme}>
    <CustomMarkdown theme={theme}>{content}</CustomMarkdown>
  </Page>
}
