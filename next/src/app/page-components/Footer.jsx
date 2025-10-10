import icon from "../../../public/icons/bytesized-orange.png";

export function Footer() {

    const date = new Date();

    const year = date.getFullYear();

    return (
        <footer className="footer">

            <p className="center-text">
                Website designed by <img src={ icon.src } height={ 20 } width={ 20 } alt="Orange fruit" /> <span id="bytesized">ByteSized Crew</span>
            </p>

            <p className="center-text">
                &copy;<em id="date"></em>{ year } by Virginia Frazier. All Rights Reserved.
            </p>

            <p className="center-text">
                The Facebook logo is trademarked by its respective owner.
            </p>
            
        </footer>  
    )
}