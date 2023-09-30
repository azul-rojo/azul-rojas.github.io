import Section from '../component/Section';
import { SectionCard } from '../component/SectionCard';
import sections from '../constants/sections';

export const Home = () => {
  return <>
     {
        sections.map((sectionProps, index) => {
        return (
          <Section key={`section-${index}`}>
            <SectionCard
              {...sectionProps}
            />
          </Section>
        )
      })}
    </> 
};
