// Import images data
import { tshirt, lounge, babyQuilts, bedQuilts } from './images.js';

// Import components
import { Card } from '../components/Card.jsx';

export function Products() {
    return (
        <div className="banner" style={{backgroundColor: "#BFE0F4"}}>

                <h2 className="center-text" id="quilts" style={{paddingTop: "75px"}}>Products</h2>

                    <div className="flexbox-container">

                        <div className="flexbox-container" style={{flexDirection: "column"}}>

                            <div className="flexbox-item">
                                <div className="center-text">
                                    <h3>T-Shirt Quilts</h3>
                                </div>
                            </div>

                            {
                                tshirt.map((item) => {
                                    return <Card src={item.src} alt={item.alt} />
                                })
                            }
                    
                        </div>

                        <div className="flexbox-container" style={{flexDirection: "column"}}>

                            
                            <div className="flexbox-item">
                                <div className="center-text">
                                    <h3>Lounge Quilts</h3>
                                </div>
                            </div>


                            {
                                lounge.map((item) => {
                                    return <Card src={item.src} alt={item.alt} />
                                })
                            }
                    
                        </div>

                        <div className="flexbox-container" style={{flexDirection: "column"}}>
                            
                            
                            <div className="flexbox-item">
                                <div className="center-text">
                                    <h3>Baby Quilts</h3>
                                </div>
                            </div>


                            {
                                babyQuilts.map((item) => {
                                    return <Card src={item.src} alt={item.alt} />
                                })
                            }
                        
                        </div>

                        <div className="flexbox-container" style={{flexDirection: "column"}}>

                            <div className="flexbox-item">
                                <div className="center-text">
                                    <h3>Bed Quilts</h3>
                                </div>
                            </div>


                            {
                                bedQuilts.map((item) => {
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