import './Hero.css'

export default function Hero() {
    const scrollTo = (id) => {
        const el = document.querySelector(id)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <section id="hero" className="hero">
            {/* Background layers */}
            <div className="hero__bg" />
            <div className="hero__overlay" />
            <div className="hero__grid" />

            {/* Floating orbs */}
            <div className="hero__orb hero__orb--1" />
            <div className="hero__orb hero__orb--2" />

            <div className="container hero__content">
                {/* Badge */}
                <div className="badge badge-red hero__badge animate-fadeInUp">
                    <span>🔥</span> #1 Fitness Coach — 500+ Transformations
                </div>

                {/* Headline */}
                <h1 className="hero__headline animate-fadeInUp">
                    Transform Your<br />
                    <span className="gradient-text">Body in 90 Days</span>
                </h1>

                {/* Sub */}
                <p className="hero__sub animate-fadeInUp">
                    Stop guessing. Start transforming. Science-backed, results-driven coaching
                    tailored specifically to your body, goals, and lifestyle — with zero fluff.
                </p>

                {/* CTAs */}
                <div className="hero__ctas animate-fadeInUp">
                    <button
                        className="btn btn-primary btn-lg hero__cta-primary"
                        onClick={() => scrollTo('#contact')}
                    >
                        🚀 Start My Transformation
                    </button>
                    <button
                        className="btn btn-outline btn-lg"
                        onClick={() => scrollTo('#results')}
                    >
                        View Success Stories
                    </button>
                </div>

                {/* Stats */}
                <div className="hero__stats animate-fadeInUp">
                    <div className="hero__stat">
                        <span className="hero__stat-num">500<span className="red-text">+</span></span>
                        <span className="hero__stat-label">Clients Transformed</span>
                    </div>
                    <div className="hero__stat-divider" />
                    <div className="hero__stat">
                        <span className="hero__stat-num">90<span className="red-text">%</span></span>
                        <span className="hero__stat-label">Success Rate</span>
                    </div>
                    <div className="hero__stat-divider" />
                    <div className="hero__stat">
                        <span className="hero__stat-num">5<span className="red-text">+</span></span>
                        <span className="hero__stat-label">Years Experience</span>
                    </div>
                    <div className="hero__stat-divider" />
                    <div className="hero__stat">
                        <span className="hero__stat-num">24<span className="red-text">/7</span></span>
                        <span className="hero__stat-label">Coach Support</span>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="hero__scroll">
                <div className="hero__scroll-line" />
            </div>
        </section>
    )
}
