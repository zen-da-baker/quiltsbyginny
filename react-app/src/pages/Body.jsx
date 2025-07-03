// Import react
import React from 'react';

// Import pages
import { Home } from './Home.jsx';
import { Products } from './Products.jsx';
import { Contact } from './Contact.tsx';

export function Body() {

    
    return (
        <main className="content">

            <Home />

            <hr className="solid"/>

            <Products />
            
            <hr className="solid" />

            <Contact />
            
        </main>
    )
}