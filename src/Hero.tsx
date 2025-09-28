function Hero() {
    return (
        <section id="home" className="hero">
            <div className = "container hero-wrap">
                <div>
                    <div className="kicker">Luminous Rehab</div>
                    <h1 className="title">Software Solutions for Rehab</h1>
                    <p className="subtitle">Streamline your rehab clinic operations with our comprehensive software platform designed to enhance patient care and improve efficiency.</p>   
                    <div className="cta-row">
                        <a className="btn primary" href="https://www.luminousrehab.com/#contact"> Schedule A Demo</a>
                        <a className="btn" href="https://www.luminousrehab.com/#contact"> Learn More</a>
                    </div>
                </div>
            <div>
                <img src="/doctor.png" alt="doctor speaking with patient" width="600" height="400" loading="lazy" srcSet="/doctor.png 1x, /doctor.png 2x" />
            </div>
            </div>
        </section>      
    );
}

export default Hero;