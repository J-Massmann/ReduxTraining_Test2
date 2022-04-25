import AboutUsSection from '../components/AboutUsSection';
import AboutUsTexts from '../data/AboutUsTexts.js';

export default function AboutUs() {
  return (
    <main>
      <h1>About us</h1>
      {AboutUsTexts.map(aboutText => (
        <AboutUsSection key={aboutText.id} SectionDetails={aboutText} />
      ))}
    </main>
  );
}
