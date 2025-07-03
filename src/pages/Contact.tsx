// Import react
import React, { useState } from 'react';

export function Contact() {

    const [name, setName] = useState<string>("");

    const [email, setEmail] = useState<string>("");

    const [message, setMessage] = useState<string>("");

    function handleName(event: any) {

        setName(event.target.value);

    }

    function handleEmail(event: any) {

        setEmail(event.target.value);

    }

    function handleMessage(event: any) {

        setMessage(event.target.value);

    }

    async function sendMessage() {

        console.log(name, email, message);

        if (name.length > 0 && email.length > 0 && message.length > 0) {

            const messageBody: any = {
                name, email, message
            }

            const jsonMessageBody: string = JSON.stringify(messageBody);

            const messageAPICall: any = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: jsonMessageBody
            }

            const initialResponse = await fetch("https://formspree.io/f/mvonwaag", messageAPICall);

            console.log(initialResponse);

            if (initialResponse.ok) {

                setName("");

                setEmail("");
                
                setMessage("");

            }

        }

    }

    return (
        <div className="banner" style={{backgroundColor: "#F5CDC0", height: "100vh"}}>
                
                <h2 className="center-text" id="contact" style={{paddingTop: "75px"}}>Contact</h2>

                <h3 className="center-text" style={{paddingTop: "75px"}}>Get in Touch</h3>

                <div className="form">

                    <label htmlFor="Name">Name</label>
                    <input type="text" name="Name" placeholder="Name..." className="input" value={ name } onChange={ handleName } />
                    
                    <br/>

                    <label htmlFor="Email">Email</label>
                    <input type="email" name="Email" placeholder="Email..." value={ email } onChange={ handleEmail } />
                    
                    <br/>

                    <label htmlFor="Message">Message</label>
                    <textarea id="message" name="Message" style={{height: "200px"}} placeholder="Message..." defaultValue={ message } onChange={ handleMessage } >


                    </textarea>

                    <button className="btn submit" onClick={ sendMessage }>Send</button>

                </div>

                
            </div>
    )

    /*
                <div>
                    <div>
                        <form action="https://formspree.io/f/mvonwaag" method="POST">
                            <label htmlFor="Name">Name</label>
                            <input type="text" name="Name" placeholder="Name" className="input" /><br/>

                            <label htmlFor="Email">Email</label>
                            <input type="email" name="Email" placeholder="Email"/><br/>

                            <label htmlFor="Message">Message</label>
                            <textarea id="message" name="Message" style={{height: "200px"}} placeholder="Message"></textarea>

                            <button type="submit" className="btn submit">Send</button>
                        </form>
                    </div>
                </div>
    */
}