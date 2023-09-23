import './App.css';
import Section from './component/Section';
import { SectionCard } from './component/SectionCard';
import sections from './constants/sections';

function App() {
  return (
    <div className="App">
      {sections.map((sectionProps, index) => {
        return (
          <Section key={`section-${index}`}>
            <SectionCard
              {...sectionProps}
            />
          </Section>
        )
      })}
    </div>
  );
}

export default App;
