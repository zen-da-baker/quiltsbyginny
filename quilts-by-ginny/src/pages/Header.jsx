export function Header() {
    return (
        <header className="header">
            <nav className="navbar navbar-nav navbar-expand navbar-dark bg-dark position-fixed" style={{zIndex: 1, width: '100vw'}}>
                <div className="container">

                    <a className="navbar-brand" href="#home">
                        <i className="fa fa-bed"></i> 
                        Quilts by Ginny
                    </a>
                
                    <ul className="nav nav-tabs container">
                        <li className="nav-item">
                            <a className="nav-link" href="#home">
                                <i className="fa fa-home"></i> 
                                Home
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#quilts">
                                <i className="fa fa-cut"></i> 
                                Quilts
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#contact">
                                <i className="fa fa-clone"></i> 
                                Contact
                            </a>
                        </li>
                    </ul>
                
                    
                    <a href="https://www.facebook.com/groups/164614630630335" 
                        rel="noreferrer"
                        target="_blank" 
                        className="btn facebook-btn" 
                        role="button" 
                        style={{borderRadius: '20px'}}
                    >
                            <i className="fa fa-facebook-square"></i> 
                            Facebook Group 
                    </a>
                    
                        
                    
                </div>
            </nav>
        </header>
    )
}