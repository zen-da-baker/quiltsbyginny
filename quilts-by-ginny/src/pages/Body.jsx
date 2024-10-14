export function Body() {
    return (
        <div class="content">

            <div id="home" class="banner"
                style="background-image:url('images/quiltHome.jpg');
                        background-attachment:fixed;
                        background-size:cover;
                        height:100dvh;
                        margin:auto;
                        width:auto;">

                <div class="center-text" 
                style="position:absolute; left:25%; top:25%; background-color:#333; border-radius:25px; opacity:0.75; padding:20px; width:50%;">
                    <div 
                    style="text-align:center; width:100%; margin:auto; left:50vh; opacity:1;">

                        <h1 style="color:#9BCFEE; -webkit-text-stroke-width:1px; -webkit-text-stroke-color:black;">Quilts by Ginny</h1>
                                
                        <h2 style="color:#9BCFEE; -webkit-text-stroke-width:1px; -webkit-text-stroke-color:black;">Custom made by Virginia Frazier</h2>

                    </div>
                </div>

                    

                <div class="page-button-div">
                    <a href="#quilts" class="page-button">
                        <button>Quilts</button>
                    </a>
                </div>
                    
            
            </div>

            <hr class="solid"/>

            <div class="banner" style="background-color:#BFE0F4;">

                <h2 class="center-text" id="quilts" style="padding-top:75px;">Products</h2>

                    <div class="flexbox-container">

                        <div class="flexbox-container" style="flex-direction: column;">

                            <div class="flexbox-item">
                                <div class="center-text">
                                    <h3>T-Shirt Quilts</h3>
                                </div>
                            </div>

                            <div class="flexbox-item">
                                <div class="center">
                                    <a href="https://www.facebook.com/groups/164614630630335" target="_Blank">
                                        <img class="thumbnail" src="images/tshirt 1.jpg" alt="tshirt quilt" width="300px" />
                                    </a>
                                </div>
                            </div>

                            <div class="flexbox-item">
                                <div class="center">
                                    <a href="https://www.facebook.com/groups/164614630630335" target="_blank">
                                        <img class="thumbnail" src="images/tshirt 2.jpg" alt="tshirt quilt" width="300px" />
                                    </a>
                                </div>
                            </div>
                    
                        </div>

                        <div class="flexbox-container" style="flex-direction: column;">

                            
                            <div class="flexbox-item">
                                <div class="center-text">
                                    <h3>Lounge Quilts</h3>
                                </div>
                            </div>


                            <div class="flexbox-item">
                                <div class="center">
                                    <a href="https://www.facebook.com/groups/164614630630335" target="_blank">
                                        <img class="thumbnail" src="images/l-quilt 1.jpg" alt="Lounge quilt" width="300px" /> 
                                    </a>
                                </div>
                            </div>


                            <div class="flexbox-item">
                                <div class="center">
                                    <a href="https://www.facebook.com/groups/164614630630335" target="_blank">
                                        <img class="thumbnail" src="images/l-quilt 2.jpg" alt="Lounge quilt" width="300px" />
                                    </a>
                                </div>
                            </div>
                    
                        </div>

                        <div class="flexbox-container" style="flex-direction: column;">
                            
                            
                            <div class="flexbox-item">
                                <div class="center-text">
                                    <h3>Baby Quilts</h3>
                                </div>
                            </div>


                            <div class="flexbox-item">
                                <div class="center">
                                    <a href="https://www.facebook.com/groups/164614630630335" target="_blank">
                                        <img class="thumbnail" src="images/babyQuilt 1.jpg" alt="Baby quilt" width="300px" />
                                    </a>
                                </div>
                            </div>

                            <div class="flexbox-item">
                                <div class="center">
                                    <a href="https://www.facebook.com/groups/164614630630335" target="_blank">
                                        <img class="thumbnail" src="images/babyQuilt 2.jpg" alt="Baby quilt" width="300px" />
                                    </a>
                                </div>
                            </div>
                        
                        </div>

                        <div class="flexbox-container" style="flex-direction: column;">

                            <div class="flexbox-item">
                                <div class="center-text">
                                    <h3>Bed Quilts</h3>
                                </div>
                            </div>


                            <div class="flexbox-item">
                                <div class="center">
                                    <a href="https://www.facebook.com/groups/164614630630335" target="_blank">
                                        <img class="thumbnail" src="images/bedQuilt 3.jpg" alt="Bed quilt" width="300px" />
                                    </a>
                                </div>
                            </div>


                            <div class="flexbox-item">
                                <div class="center">
                                    <a href="https://www.facebook.com/groups/164614630630335" target="_blank">
                                        <img class="thumbnail" src="images/bedQuilt 4.jpg" alt="Bed quilt" width="300px" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>


                <div class="page-button-div" style="position:relative;">
                    <a href="#contact" class="page-button">
                        <button>Contact</button>
                    </a>
                </div>
                

            </div>
            
            <hr class="solid" />

            <div class="banner" style="background-color:#F5CDC0; height:100vh;">
                
                <h2 class="center-text" id="contact" style="padding-top:75px;">Contact</h2>

                <h3 class="center-text" style="padding-top:75px;">Get in Touch</h3>

                <div class="center-text">
                    <div>
                        <form action="https://formspree.io/f/mvonwaag" method="POST">
                            <label for="Name"></label>
                            <input type="text" name="Name" placeholder="Name" /><br/>

                            <label for="Email"></label>
                            <input type="email" name="Email" placeholder="Email"/><br/>

                            <label for="Message"></label>
                            <textarea type="message" name="Message" style="height:200px;" placeholder="Message"></textarea>

                            <button type="submit">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}