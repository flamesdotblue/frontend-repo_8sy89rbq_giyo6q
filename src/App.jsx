import { useEffect, useState } from 'react';
import Header from './components/Header';
import Sections from './components/Sections';
import Gallery from './components/Gallery';
import ContactFooter from './components/ContactFooter';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="scroll-smooth bg-[#f8f7fb] dark:bg-[#0b0b0e] text-[#222222] dark:text-zinc-100 min-h-screen">
      <Header darkMode={darkMode} onToggleDark={() => setDarkMode((v) => !v)} />
      <main>
        <Sections />
        <Gallery />
        <ContactFooter />
      </main>
    </div>
  );
}
