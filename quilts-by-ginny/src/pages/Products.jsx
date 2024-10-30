// Import images data
import { images } from './images.js';

// Import components
import { Card } from '../components/Card.jsx';

export function Products() {
    return (
        <div className="banner" style={{backgroundColor: "#BFE0F4"}}>

                <h2 className="center-text" id="quilts" style={{paddingTop: "75px"}}>Products</h2>

                    <div className="flexbox-container">

                        <div className="flexbox-container" style={{flexDirection: "row"}}>

                            <div className="flexbox-item">
                                <div className="center-text">
                                    <h3>T-Shirt Quilts, Lounge Quilts, Baby Quilts, Ornaments, Hotpads, and more!</h3>
                                </div>
                            </div>

                            {
                                images.map((item) => {
                                    return <Card src={item.src} alt={item.alt} />
                                })
                            }
                    
                        </div>
                    </div>


                <div className="page-button-div" style={{position: "relative"}}>
                    <a href="#contact" className="page-button">
                        <button>Contact</button>
                    </a>
                </div>
                

            </div>
    )
}