import survivalKits from './survivalkits.md';
import { PageMarkdown } from "../component/PageMarkdown";

export const SurvivalKits = () => {
  return <PageMarkdown mdSource={survivalKits} />
};
