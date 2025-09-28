function Footer() {
    return (
        <footer>
            <section id="footer" className="footer-grid">
            <div className="footer-section">
                <h2>Services</h2>
                <ul className="footer-links">
                    <li><a href="https://www.luminousrehab.com/#contact">Practice Management</a></li>
                    <li><a href="https://www.luminousrehab.com/#contact">Telehealth</a></li>
                    <li><a href="https://www.luminousrehab.com/#contact">Patient Tracking</a></li>
                    <li><a href="https://www.luminousrehab.com/#contact">Custom Web Apps</a></li>
                </ul>
            </div>
            <div className="footer-section">
                <h2>Resources</h2>
                <ul className="footer-links"> 
                    <li><a href="https://www.luminousrehab.com/#contact">Contact</a></li>
                    <li><a href="https://www.luminousrehab.com/#features">Features</a></li>
                    <li><a href="https://www.luminousrehab.com/#about">About</a></li>
                </ul>
            </div>
            <div className="footer-section">
                <h2>Connect</h2>
                <ul className="footer-links">
                    <li><a href="https://www.luminousrehab.com/#contact">About Us</a></li>
                    <li><a href="https://www.luminousrehab.com/#contact">Careers</a></li>
                    <li><a href="https://www.luminousrehab.com/#contact">Blog</a></li>
                    <li><a href="https://www.luminousrehab.com/#contact">Press</a></li>
                </ul>
            </div>
            <p>
            &copy; {new Date().getFullYear()} Luminous Rehab. All rights reserved. &nbsp;|&nbsp; <a href="mailto:contact@luminousrehab.com">contact@luminousrehab.com</a> &nbsp;|&nbsp; <a href="/privacy.html">Privacy</a>
            </p>
            </section>
            
        </footer>
    );
}

export default Footer;