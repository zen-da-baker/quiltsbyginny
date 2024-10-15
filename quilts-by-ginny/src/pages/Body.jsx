// Import components
import { Card } from '../components/Card.jsx';

// Import images data
import { tshirt, lounge, babyQuilts, bedQuilts } from './images.js';

export function Body() {
    return (
        <div class="content">

            <div id="home" className="banner">

                <div className="center-text" 
                    style={{
                        position: "absolute", 
                        left: "25%", 
                        top: "25%", 
                        backgroundColor: "#333", 
                        borderRadius: "25px", 
                        opacity: 1,
                        padding: "20px",
                        width: "50%"
                    }}>

                    <div 
                        style={{
                            textAlign: "center", 
                            width: "100%", 
                            margin: "auto", 
                            left: "50vh",
                            opacity: 1
                        }}>

                        <h1 style={{
                            color: "#9BCFEE",
                        }}>Quilts by Ginny</h1>
                                
                        <h2 style={{color: "#9BCFEE"}}>Custom made by Virginia Frazier</h2>

                    </div>
                </div>

                    

                <div className="page-button-div">
                    <a href="#quilts" class="page-button">
                        <button>Quilts</button>
                    </a>
                </div>
                    
            
            </div>

            <hr className="solid"/>

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
            
            <hr className="solid" />

            <div className="banner" style={{backgroundColor: "#F5CDC0", height: "100vh"}}>
                
                <h2 className="center-text" id="contact" style={{paddingTop: "75px"}}>Contact</h2>

                <h3 className="center-text" style={{paddingTop: "75px"}}>Get in Touch</h3>

                <div className="center-text">
                    <div>
                        <form action="https://formspree.io/f/mvonwaag" method="POST">
                            <label htmlFor="Name"></label>
                            <input type="text" name="Name" placeholder="Name" /><br/>

                            <label htmlFor="Email"></label>
                            <input type="email" name="Email" placeholder="Email"/><br/>

                            <label htmlFor="Message"></label>
                            <textarea type="message" name="Message" style={{height: "200px"}} placeholder="Message"></textarea>

                            <button type="submit" className="btn">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}