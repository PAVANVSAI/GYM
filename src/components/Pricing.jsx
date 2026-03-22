import './Pricing.css'

const plans = [
    {
        name: 'Basic',
        emoji: '⚡',
        price: '49',
        period: '/month',
        tagline: 'Perfect to get started',
        features: [
            'Personalized workout plan',
            'Basic nutrition guidelines',
            'Email support (48h response)',
            'Monthly check-in call',
            'Access to exercise library',
        ],
        notIncluded: ['Weekly WhatsApp support', 'Custom meal plans', 'Video form checks'],
        highlight: false,
    },
    {
        name: 'Pro',
        emoji: '🔥',
        price: '99',
        period: '/month',
        tagline: 'Most popular choice',
        features: [
            'Full custom workout plan',
            'Detailed nutrition & macros',
            'Weekly WhatsApp support',
            'Bi-weekly check-in calls',
            'Custom meal plan',
            'Video form corrections',
            'Progress tracking app',
        ],
        notIncluded: ['24/7 priority access'],
        highlight: true,
    },
    {
        name: 'Elite',
        emoji: '👑',
        price: '199',
        period: '/month',
        tagline: 'Maximum results, fast',
        features: [
            'Everything in Pro',
            '24/7 priority WhatsApp',
            'Weekly 1-on-1 video calls',
            'DNA & body analysis',
            'Supplement protocol',
            'Mindset & lifestyle coaching',
            'Guaranteed results or refund',
        ],
        notIncluded: [],
        highlight: false,
    },
]

export default function Pricing() {
    const scrollTo = (id) => {
        const el = document.querySelector(id)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <section id="pricing" className="section pricing">
            <div className="container">
                {/* Header */}
                <div className="pricing__header reveal">
                    <span className="section-label">Pricing</span>
                    <div className="divider" />
                    <h2 className="section-title">
                        Invest in Your <span className="red-text">Best Self</span>
                    </h2>
                    <p className="section-subtitle">
                        Transparent pricing with no hidden costs. Every plan comes with a personalized
                        approach and a commitment to your success.
                    </p>
                </div>

                {/* Cards */}
                <div className="pricing__grid">
                    {plans.map((plan, i) => (
                        <div
                            key={i}
                            className={`pricing__card reveal${plan.highlight ? ' pricing__card--highlight' : ''}`}
                            style={{ transitionDelay: `${i * 0.15}s` }}
                        >
                            {plan.highlight && <div className="pricing__popular">🌟 Most Popular</div>}

                            <div className="pricing__header-card">
                                <span className="pricing__emoji">{plan.emoji}</span>
                                <div>
                                    <h3 className="pricing__name">{plan.name}</h3>
                                    <p className="pricing__tagline">{plan.tagline}</p>
                                </div>
                            </div>

                            <div className="pricing__price">
                                <span className="pricing__currency">$</span>
                                <span className="pricing__amount">{plan.price}</span>
                                <span className="pricing__period">{plan.period}</span>
                            </div>

                            <ul className="pricing__features">
                                {plan.features.map((f, fi) => (
                                    <li key={fi} className="pricing__feature pricing__feature--yes">
                                        <span className="pricing__check">✓</span> {f}
                                    </li>
                                ))}
                                {plan.notIncluded.map((f, fi) => (
                                    <li key={fi} className="pricing__feature pricing__feature--no">
                                        <span className="pricing__cross">✗</span> {f}
                                    </li>
                                ))}
                            </ul>

                            <button
                                className={`btn ${plan.highlight ? 'btn-primary' : 'btn-ghost'} pricing__cta`}
                                onClick={() => scrollTo('#contact')}
                            >
                                Join Now →
                            </button>
                        </div>
                    ))}
                </div>

                <p className="pricing__note reveal">
                    💡 All plans include a <strong>free 15-minute consultation call</strong>. Not sure which plan is right for you? Let's talk.
                </p>
            </div>
        </section>
    )
}
