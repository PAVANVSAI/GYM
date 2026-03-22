import { useState } from 'react'
import './Contact.css'

const goals = [
    'Fat Loss', 'Muscle Building', 'Body Recomposition',
    'Improve Fitness', 'Online Coaching', 'Competition Prep',
]

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', phone: '', goal: '' })
    const [submitted, setSubmitted] = useState(false)

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setSubmitted(true)
    }

    return (
        <section id="contact" className="section contact">
            <div className="container">
                {/* Header */}
                <div className="contact__header reveal">
                    <span className="section-label">Get Started</span>
                    <div className="divider" />
                    <h2 className="section-title">
                        Ready to <span className="red-text">Transform?</span>
                    </h2>
                    <p className="section-subtitle">
                        Fill in your details and I'll get back to you within 24 hours with a
                        tailored plan to help you achieve your goals.
                    </p>
                </div>

                <div className="contact__grid">
                    {/* Info */}
                    <div className="contact__info reveal-left">
                        <div className="contact__info-card">
                            <h3 className="contact__info-title">What Happens Next?</h3>
                            <div className="contact__steps">
                                <div className="contact__step">
                                    <span className="contact__step-num">01</span>
                                    <div>
                                        <p className="contact__step-title">Free Consultation</p>
                                        <p className="contact__step-desc">15-minute intro call to understand your goals and lifestyle</p>
                                    </div>
                                </div>
                                <div className="contact__step">
                                    <span className="contact__step-num">02</span>
                                    <div>
                                        <p className="contact__step-title">Custom Plan</p>
                                        <p className="contact__step-desc">Receive your personalized workout + nutrition blueprint</p>
                                    </div>
                                </div>
                                <div className="contact__step">
                                    <span className="contact__step-num">03</span>
                                    <div>
                                        <p className="contact__step-title">Start Transforming</p>
                                        <p className="contact__step-desc">Begin your 90-day journey with full coaching support</p>
                                    </div>
                                </div>
                            </div>

                            <div className="contact__direct">
                                <p className="contact__direct-label">Or reach out directly:</p>
                                <a
                                    href="https://wa.me/919999999999"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="contact__whatsapp"
                                >
                                    <span>💬</span> WhatsApp Me Now
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="contact__form-wrap reveal-right">
                        {submitted ? (
                            <div className="contact__success">
                                <div className="contact__success-icon">🎉</div>
                                <h3>You're In!</h3>
                                <p>Thank you, <strong>{form.name}</strong>! I'll reach out within 24 hours to schedule your free consultation. Get ready to transform!</p>
                                <button className="btn btn-primary" onClick={() => setSubmitted(false)}>
                                    Submit Another
                                </button>
                            </div>
                        ) : (
                            <form className="contact__form" onSubmit={handleSubmit} id="contact-form">
                                <div className="contact__form-group">
                                    <label htmlFor="name" className="contact__label">Full Name *</label>
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        className="contact__input"
                                        placeholder="John Doe"
                                        value={form.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="contact__form-group">
                                    <label htmlFor="email" className="contact__label">Email Address *</label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        className="contact__input"
                                        placeholder="john@example.com"
                                        value={form.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="contact__form-group">
                                    <label htmlFor="phone" className="contact__label">Phone / WhatsApp</label>
                                    <input
                                        id="phone"
                                        name="phone"
                                        type="tel"
                                        className="contact__input"
                                        placeholder="+1 (555) 000-0000"
                                        value={form.phone}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="contact__form-group">
                                    <label htmlFor="goal" className="contact__label">Your Primary Goal *</label>
                                    <select
                                        id="goal"
                                        name="goal"
                                        className="contact__input contact__select"
                                        value={form.goal}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">Select your goal...</option>
                                        {goals.map((g) => (
                                            <option key={g} value={g}>{g}</option>
                                        ))}
                                    </select>
                                </div>

                                <button type="submit" className="btn btn-primary btn-lg contact__submit">
                                    🚀 Start My Free Consultation
                                </button>

                                <p className="contact__privacy">
                                    🔒 Your information is 100% private. No spam, ever.
                                </p>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}
