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
import { Body } from './page-components/Body.jsx';
import { Header } from './page-components/Header.jsx';
import { Footer } from './page-components/Footer.jsx';

export default function Home() {

  return (
    <div>

      <Header />

      <Body />

      <Footer />
      
    </div>
  );
}
