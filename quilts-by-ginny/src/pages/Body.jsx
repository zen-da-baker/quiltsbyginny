// Import pages
import { Home } from './Home';
import { Products } from './Products';
import { Contact } from './Contact';

export function Body() {

    
    return (
        <main class="content">

            <Home />

            <hr className="solid"/>

            <Products />
            
            <hr className="solid" />

            <Contact />
            
        </main>
    )
}