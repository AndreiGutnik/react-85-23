import PaintingsList from './components/PaintingsList';
import Section from './components/Section'
import paintings from './pfintings.json';

export default function App() {
  return (
    <>
      <Section title="Top images">
        <PaintingsList items={paintings} />
        <Section />
      </Section>
    </>
  );
}
