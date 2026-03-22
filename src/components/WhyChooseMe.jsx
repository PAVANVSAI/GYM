import './WhyChooseMe.css'

const benefits = [
    {
        icon: '📋',
        title: 'Personalized Plans',
        desc: 'Every workout and meal plan is crafted specifically for your body type, metabolism, and goals. Zero cookie-cutter templates.',
    },
    {
        icon: '🥗',
        title: 'Diet Guidance',
        desc: 'Flexible nutrition coaching that fits your lifestyle — no crash diets, no food restrictions, just smart eating that fuels your goals.',
    },
    {
        icon: '📊',
        title: 'Weekly Check-ins',
        desc: 'Stay on track with structured weekly progress reviews, measurable metrics, and real-time plan adjustments based on your results.',
    },
    {
        icon: '💬',
        title: 'WhatsApp Support',
        desc: "Got a question at 10pm? Message anytime. I'm always just a text away to keep you motivated and answer every question.",
    },
    {
        icon: '🧪',
        title: 'Science-Backed Methods',
        desc: 'Every technique I use is rooted in exercise physiology and nutrition science — no fads, no myths, just what actually works.',
    },
    {
        icon: '🏅',
        title: 'Proven Track Record',
        desc: 'With 500+ successful transformations and a 90% success rate, my methods are battle-tested and consistently deliver results.',
    },
]

export default function WhyChooseMe() {
    return (
        <section id="why" className="section why">
            <div className="container">
                {/* Header */}
                <div className="why__header reveal">
                    <span className="section-label">Why Coach Alex</span>
                    <div className="divider" />
                    <h2 className="section-title">
                        What Makes This <span className="red-text">Different</span>
                    </h2>
                    <p className="section-subtitle">
                        Hundreds of coaches exist. Here's why 500+ clients chose me and stayed — and why you should too.
                    </p>
                </div>

                {/* Grid */}
                <div className="why__grid">
                    {benefits.map((b, i) => (
                        <div key={i} className="why__card reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
                            <div className="why__icon">{b.icon}</div>
                            <h3 className="why__title">{b.title}</h3>
                            <p className="why__desc">{b.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA banner */}
                <div className="why__banner reveal">
                    <div className="why__banner-text">
                        <h3>Ready to finally get the results you deserve?</h3>
                        <p>Join over 500 clients who transformed their bodies and their lives.</p>
                    </div>
                    <button
                        className="btn btn-primary btn-lg"
                        onClick={() => {
                            const el = document.querySelector('#contact')
                            if (el) el.scrollIntoView({ behavior: 'smooth' })
                        }}
                    >
                        🚀 Start My Journey
                    </button>
                </div>
            </div>
        </section>
    )
}
