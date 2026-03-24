import './About.css'

const achievements = [
    { icon: '🏆', text: 'Certified Personal Trainer (NASM & ACE)' },
    { icon: '📅', text: '5+ Years of Elite Coaching Experience' },
    { icon: '💪', text: '500+ Successful Body Transformations' },
    { icon: '🎓', text: 'BSc Sports Science & Nutrition' },
    { icon: '🏅', text: 'Former Competitive Bodybuilder' },
    { icon: '🌍', text: 'Online Clients Across 20+ Countries' },
]

export default function About() {
    const scrollTo = (id) => {
        const el = document.querySelector(id)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <section id="about" className="section about">
            <div className="container about__grid">

                {/* Photo */}
                <div className="about__photo-wrap reveal-left">
                    <div className="about__photo-frame">
                        <img src={`${import.meta.env.BASE_URL}coach.png`} alt="Coach Alex" className="about__photo-img" />
                        <div className="about__photo-badge">
                            <span className="about__photo-badge-num">500+</span>
                            <span className="about__photo-badge-text">Lives Changed</span>
                        </div>
                    </div>
                    <div className="about__photo-glow" />
                </div>

                {/* Content */}
                <div className="about__content reveal-right">
                    <span className="section-label">Meet Your Coach</span>
                    <div className="divider" />
                    <h2 className="section-title">
                        I'm Coach <span className="red-text">Alex Mercer</span>
                    </h2>
                    <p className="about__bio">
                        With over 5 years of hands-on experience and 500+ transformations under my belt,
                        I specialize in helping busy individuals cut through the noise of fitness and
                        build a body they're proud of — without living in the gym.
                    </p>
                    <p className="about__bio">
                        My approach is simple: <strong>real science, real accountability, real results.</strong>
                        No cookie-cutter plans. Every program is built around <em>your</em> body, schedule, and goals.
                    </p>

                    {/* Achievements */}
                    <ul className="about__achievements">
                        {achievements.map((item, i) => (
                            <li key={i} className="about__achievement">
                                <span className="about__achievement-icon">{item.icon}</span>
                                <span>{item.text}</span>
                            </li>
                        ))}
                    </ul>

                    <button
                        className="btn btn-primary btn-lg"
                        onClick={() => scrollTo('#contact')}
                    >
                        Work With Me →
                    </button>
                </div>
            </div>
        </section>
    )
}
