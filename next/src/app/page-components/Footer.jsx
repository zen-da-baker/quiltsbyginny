export function Footer() {

    const date = new Date();

    const year = date.getFullYear();

    return (
        <footer className="footer">

            <p className="center-text">
                Website designed by ByteSized Crew
            </p>

            <p className="center-text">
                &copy;<em id="date"></em>{year} by Virginia Frazier. All Rights Reserved.
            </p>

            <p className="center-text">
                The Facebook logo is trademarked by its respective owner.
            </p>
            
        </footer>  
    )
}