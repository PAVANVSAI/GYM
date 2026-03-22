import './Footer.css'

export default function Footer() {
    const scrollTo = (id) => {
        const el = document.querySelector(id)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__grid">
                    {/* Brand */}
                    <div className="footer__brand">
                        <div className="footer__logo">
                            <span className="footer__logo-icon">⚡</span>
                            <span>ELITE<span className="red-text">FIT</span></span>
                        </div>
                        <p className="footer__tagline">
                            Transforming bodies and changing lives through science-backed, personalized fitness coaching.
                        </p>
                        <div className="footer__socials">
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="footer__social"
                                aria-label="Instagram"
                            >
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                                    <circle cx="12" cy="12" r="4" />
                                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                                </svg>
                            </a>
                            <a
                                href="https://youtube.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="footer__social"
                                aria-label="YouTube"
                            >
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
                                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58a2.78 2.78 0 0 0 1.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
                                    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer__links-col">
                        <h4 className="footer__col-title">Quick Links</h4>
                        <ul className="footer__links">
                            {[
                                { label: 'About Coach', id: '#about' },
                                { label: 'Programs', id: '#programs' },
                                { label: 'Why Choose Me', id: '#why' },
                                { label: 'Pricing', id: '#pricing' },
                                { label: 'Contact', id: '#contact' },
                            ].map((l) => (
                                <li key={l.id}>
                                    <button
                                        className="footer__link"
                                        onClick={() => scrollTo(l.id)}
                                    >
                                        {l.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Programs */}
                    <div className="footer__links-col">
                        <h4 className="footer__col-title">Programs</h4>
                        <ul className="footer__links">
                            <li><button className="footer__link" onClick={() => scrollTo('#programs')}>Fat Loss Program</button></li>
                            <li><button className="footer__link" onClick={() => scrollTo('#programs')}>Muscle Building</button></li>
                            <li><button className="footer__link" onClick={() => scrollTo('#programs')}>Online Coaching</button></li>
                            <li><button className="footer__link" onClick={() => scrollTo('#pricing')}>Pricing Plans</button></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="footer__links-col">
                        <h4 className="footer__col-title">Contact</h4>
                        <ul className="footer__contact-info">
                            <li>
                                <span>📧</span>
                                <span>coach@elitefit.com</span>
                            </li>
                            <li>
                                <span>📱</span>
                                <span>+1 (555) 000-0000</span>
                            </li>
                            <li>
                                <span>📍</span>
                                <span>New York, USA (Online Worldwide)</span>
                            </li>
                            <li>
                                <span>🕐</span>
                                <span>Mon–Sat: 8AM – 8PM EST</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="footer__bottom">
                    <p>© {new Date().getFullYear()} EliteFit Coaching. All rights reserved.</p>
                    <p className="footer__bottom-links">
                        <span>Privacy Policy</span>
                        <span>·</span>
                        <span>Terms of Service</span>
                    </p>
                </div>
            </div>
        </footer>
    )
}
