import './Programs.css'

const programs = [
    {
        icon: '🔥',
        tag: 'Most Popular',
        title: 'Fat Loss Program',
        description: 'Shred stubborn fat with precision nutrition, strategic cardio, and metabolic training designed to torch calories while preserving lean muscle.',
        features: [
            'Custom calorie & macro plan',
            'Fat-burning workout schedule',
            'Weekly progress tracking',
            'Supplement guidance',
            'Recipe & meal prep guide',
            '24/7 WhatsApp support',
        ],
        color: '#e63946',
        highlight: true,
    },
    {
        icon: '💪',
        tag: 'Best for Gains',
        title: 'Muscle Building Program',
        description: 'Pack on serious muscle with progressive overload programming, optimized hypertrophy training, and a high-performance nutrition protocol.',
        features: [
            'Progressive overload plan',
            'Hypertrophy-focused workouts',
            'Mass-gain nutrition blueprint',
            'Recovery & sleep protocols',
            'Monthly program updates',
            'Video form corrections',
        ],
        color: '#ff4757',
        highlight: false,
    },
    {
        icon: '🌍',
        tag: 'Flexible & Remote',
        title: 'Online Coaching',
        description: 'Get elite-level coaching from anywhere in the world. Full transformation package with weekly check-ins, adjustments, and constant accountability.',
        features: [
            'Fully remote — train anywhere',
            'Bi-weekly video check-ins',
            'Customized home/gym plans',
            'Nutrition & mindset coaching',
            'Access to app dashboard',
            'Priority WhatsApp support',
        ],
        color: '#c1121f',
        highlight: false,
    },
]

export default function Programs() {
    const scrollTo = (id) => {
        const el = document.querySelector(id)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <section id="programs" className="section programs">
            <div className="container">
                {/* Header */}
                <div className="programs__header reveal">
                    <span className="section-label">Training Programs</span>
                    <div className="divider" />
                    <h2 className="section-title">
                        Choose Your <span className="red-text">Path to Greatness</span>
                    </h2>
                    <p className="section-subtitle">
                        Every program is custom-designed around your body type, fitness level,
                        and specific goals — no generic templates, ever.
                    </p>
                </div>

                {/* Cards */}
                <div className="programs__grid">
                    {programs.map((prog, i) => (
                        <div
                            key={i}
                            className={`programs__card reveal${prog.highlight ? ' programs__card--highlight' : ''}`}
                            style={{ '--card-accent': prog.color, animationDelay: `${i * 0.15}s` }}
                        >
                            {prog.highlight && (
                                <div className="programs__popular">⭐ {prog.tag}</div>
                            )}
                            {!prog.highlight && (
                                <div className="programs__tag">{prog.tag}</div>
                            )}

                            <div className="programs__card-icon">{prog.icon}</div>
                            <h3 className="programs__card-title">{prog.title}</h3>
                            <p className="programs__card-desc">{prog.description}</p>

                            <ul className="programs__features">
                                {prog.features.map((f, fi) => (
                                    <li key={fi} className="programs__feature">
                                        <span className="programs__feature-check">✓</span>
                                        {f}
                                    </li>
                                ))}
                            </ul>

                            <button
                                className={`btn ${prog.highlight ? 'btn-primary' : 'btn-ghost'} programs__enroll`}
                                onClick={() => scrollTo('#contact')}
                            >
                                Enroll Now →
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
