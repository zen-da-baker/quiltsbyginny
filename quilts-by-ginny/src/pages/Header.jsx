export function Header() {
    return (
        <header>
            <nav class="navbar navbar-nav navbar-expand navbar-dark bg-dark position-fixed" style="z-index:1; width:100vw;">
                <div class="container">

                    <a class="navbar-brand" href="#"><i class="fa fa-bed"></i> Quilts by Ginny</a>
                
                    <ul class="nav nav-tabs">
                        <li class="nav-item">
                            <a class="nav-link" href="#home"><i class="fa fa-home"></i> Home</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="#quilts"><i class="fa fa-cut"></i> Quilts</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="#contact"><i class="fa fa-clone"></i> Contact</a>
                        </li>
                    </ul>
                
                    <div>
                        <a href="https://www.facebook.com/groups/164614630630335" target="_blank" class="btn btn-primary" role="button" style="border-radius:20px"><i class="fa fa-facebook-square"></i> Facebook Group </a>
                    </div>
                        
                    
                </div>
            </nav>
        </header>
    )
}