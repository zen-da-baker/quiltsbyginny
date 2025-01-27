// Import react
import React from 'react';

// Import pages
import { Home } from './Home.tsx';
import { Products } from './Products.tsx';
import { Contact } from './Contact.jsx';

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