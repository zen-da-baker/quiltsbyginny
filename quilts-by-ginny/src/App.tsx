// Import react
import React from 'react';

// Import styles
import './styles/components.css';
import './styles/global.css';
import './styles/structure.css';
import './styles/typography.css';
import './styles/scroll.css';
import './styles/main.css';
import './styles/contact.css';
import './styles/responsive.css';

// Import page components
import { Body } from './pages/Body.tsx';
import { Header } from './pages/Header.tsx';
import { Footer } from './pages/Footer.tsx';

function App() {

  return (
      <div>
        <Header />
        <Body />
        <Footer />
      </div>
  );
}

export default App;
