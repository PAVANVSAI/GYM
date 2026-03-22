import { useState, useEffect } from 'react'
import './Navbar.css'

const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Programs', href: '#programs' },
    { label: 'Results', href: '#transformations' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const handleNav = (e, href) => {
        e.preventDefault()
        setMenuOpen(false)
        const target = document.querySelector(href)
        if (target) target.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
            <div className="navbar__inner container">
                {/* Logo */}
                <a href="#hero" className="navbar__logo" onClick={(e) => handleNav(e, '#hero')}>
                    <span className="navbar__logo-icon">⚡</span>
                    <span>ELITE<span className="navbar__logo-accent">FIT</span></span>
                </a>

                {/* Desktop Nav */}
                <nav className="navbar__links">
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className="navbar__link"
                            onClick={(e) => handleNav(e, link.href)}
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                {/* CTA */}
                <a
                    href="#contact"
                    className="btn btn-primary navbar__cta"
                    onClick={(e) => handleNav(e, '#contact')}
                >
                    Start Now
                </a>

                {/* Hamburger */}
                <button
                    className={`navbar__hamburger${menuOpen ? ' open' : ''}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <span />
                    <span />
                    <span />
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`navbar__mobile${menuOpen ? ' navbar__mobile--open' : ''}`}>
                {navLinks.map((link) => (
                    <a
                        key={link.label}
                        href={link.href}
                        className="navbar__mobile-link"
                        onClick={(e) => handleNav(e, link.href)}
                    >
                        {link.label}
                    </a>
                ))}
                <a
                    href="#contact"
                    className="btn btn-primary"
                    onClick={(e) => handleNav(e, '#contact')}
                >
                    Start Now
                </a>
            </div>
        </header>
    )
}
