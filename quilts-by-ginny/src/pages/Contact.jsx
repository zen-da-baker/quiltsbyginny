export function Contact() {
    return (
        <div className="banner" style={{backgroundColor: "#F5CDC0", height: "100vh"}}>
                
                <h2 className="center-text" id="contact" style={{paddingTop: "75px"}}>Contact</h2>

                <h3 className="center-text" style={{paddingTop: "75px"}}>Get in Touch</h3>

                <div>
                    <div>
                        <form action="https://formspree.io/f/mvonwaag" method="POST">
                            <label htmlFor="Name">Name</label>
                            <input type="text" name="Name" placeholder="Name" className="input" /><br/>

                            <label htmlFor="Email">Email</label>
                            <input type="email" name="Email" placeholder="Email"/><br/>

                            <label htmlFor="Message">Message</label>
                            <textarea type="message" name="Message" style={{height: "200px"}} placeholder="Message"></textarea>

                            <button type="submit" className="btn submit">Send</button>
                        </form>
                    </div>
                </div>
            </div>
    )
}