// look up how to map through pages


function Nav() {

    return (
        <nav className="navbar navbar-expand-lg"  >
            <div className="container-fluid" >
                <a className="navbar-brand" href="/about"></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <CustomLink href="/about">About Me</CustomLink>
                        <CustomLink href="/projects">Portfolio</CustomLink>
                        <CustomLink href="/contact">Contact</CustomLink>
                        <CustomLink href="/resume">Resume</CustomLink>
                        {/* <li className="nav-item">
                                <a className="nav-link" href="/about">About Me</a>
                            </li> */}

                        {/* <li className="nav-item">
                                <a className="nav-link" href="/projects">Portfolio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/contact">Contact</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/resume">Resume</a>
                            </li> */}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

function CustomLink({ href, children, ...props }) {
    const path = window.location.pathname
    return (
        < li className={path === href ? "nav-item active" : "nav-item"} >
            <a className="nav-link" href={href}>{children}</a>
        </li >
    )
}

export default Nav;