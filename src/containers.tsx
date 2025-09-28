function Containers() {
    return (
        <section id="projects" aria-labelledby="projects-title">
            <div className = "container">
                <h2 id="projects-title">Revolutionizing Rehabilitation Through Technology</h2>
                <p className="section-intro">At Luminous Rehab, we understand that rehabilitation is about more than recovery—it’s about helping patients regain independence and live healthier lives. That’s why we build custom software solutions designed to simplify operations, empower providers, and improve patient care. Our digital tools are tailored to the unique needs of rehab clinics, from scheduling and billing to patient engagement and telehealth. The result? A more connected, efficient, and patient-focused experience</p>

                <div className="grid cards">
                    <article className="card">
                        <div className="meta"><strong>Practice Management Made Simple</strong></div>
                        <div className="content">
                            <p>Running a rehab clinic is no small task. Our Practice Management Systems take the hassle out of everyday operations so you can focus on what really matters—your patients.</p>
                            <ul>
                                <li>Automated scheduling that reduces no-shows</li>
                                <li>Streamlined billing & insurance claims</li>
                                <li>Centralized dashboards for staff and providers</li>
                            </ul>
                        </div>
                        <a className="more" href="https://www.luminousrehab.com/#contact">Learn More</a>
                    </article>

                    <article className="card">
                        <div className="meta"><strong>Smarter Patient Tracking</strong></div>
                        <div className="content">
                            <p>Every patient’s journey is unique. Our Patient Tracking Software keeps care personalized and measurable by giving providers clear insights into progress and outcomes.</p>
                            <ul>
                                <li>Customizable outcome measures</li>
                                <li>Real-time progress dashboards</li>
                                <li>Data-driven treatment adjustments</li>
                            </ul>
                        </div>
                        <a className="more" href="https://www.luminousrehab.com/#contact">Learn More</a>
                    </article>

                    <article className="card">
                        <div className="meta"><strong>Telehealth & Remote Care</strong></div>
                        <div className="content">
                            <p>Expand your reach and improve patient outcomes with our integrated telehealth solutions. Deliver care anytime, anywhere.</p>
                            <ul>
                                <li>Secure video consultations</li>
                                <li>Remote patient monitoring</li>
                                <li>Virtual exercise programs</li>
                            </ul>
                        </div>
                        <a className="more" href="https://www.luminousrehab.com/#contact">Learn More</a>
                    </article>

                    <article className="card">
                        <div className="meta"><strong>Custom-Built for Your Clinic</strong></div>
                        <div className="content">
                            <p>No two practices are the same. Our Custom Web Applications are built around your workflows, integrating seamlessly with existing systems to create an experience that feels natural for both staff and patients.</p>
                            <ul>
                                <li>Patient education portals with video libraries</li>
                                <li>Custom reporting & compliance tools</li>
                                <li>Team communication platforms </li>
                            </ul>
                        </div>
                        <a className="more" href="https://www.luminousrehab.com/#contact">Learn More</a>
                    </article>
                </div>
            </div>
        </section>
    )
}
export default Containers;