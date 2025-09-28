function NavBar() {
    return (
        <header className="topbar">
            <div className="container topbar-inner">
                <a className="brand" href="#home"><span className="dot" aria-hidden></span>Software Solutions for Rehab</a>
                <nav aria-label="Primary Navigation">
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#features">Features</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a className="btn primary" href="https://www.luminousrehab.com/#contact">Schedule A Demo</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
export default NavBar;