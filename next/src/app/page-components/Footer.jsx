import icon from "../../../public/icons/bytesized-orange.png";

export function Footer() {

    const date = new Date();

    const year = date.getFullYear();

    return (
        <footer className="footer">

            <p className="center-text">

                Website designed by 

                <a href="https://bytesizedcrew.com" rel="noreferrer" target="_blank">
                
                    <img src={ icon.src } height={ 20 } width={ 20 } alt="Orange fruit" /> 
                    
                    <span id="bytesized">ByteSized Crew</span>

                </a>

            </p>

            <p className="center-text">

                &copy; { year } by Virginia Frazier. All Rights Reserved.

            </p>

            <p className="center-text">

                The Facebook logo is trademarked by its respective owner.
                
            </p>
            
        </footer>  
    )
}