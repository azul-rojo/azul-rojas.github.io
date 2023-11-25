import { CustomMarkdown } from "../component/CustomMakrdown";
import { Page } from "../component/Page";
import survivalKits from './survivalkits.md';
import { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../GlobalContext';

export const SurvivalKits = () => {
  const { theme } = useContext(GlobalContext);
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch(survivalKits)
      .then(res => res.text())
      .then((t) => {
        setContent(t as unknown as string);
      })
  }, [])

  return <Page>
    <CustomMarkdown theme={theme}>{ content }</CustomMarkdown>
  </Page>
};
