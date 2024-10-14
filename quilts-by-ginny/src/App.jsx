// Import styles
import './styles/components.css';
import './styles/global.css';
import './styles/structure.css';
import './styles/typography.css';
import './styles/scroll.css';
import './styles/main.css';
import './styles/contact.css';

import { Body } from './pages/Body.jsx';
import { Header } from './pages/Header.jsx';
import { Footer } from './pages/Footer.jsx';

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
