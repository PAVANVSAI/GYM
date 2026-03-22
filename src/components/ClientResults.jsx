import './ClientResults.css'

const results = [
    {
        name: 'Client A',
        text: 'The personalized nutrition plan and weekly check-ins made all the difference. I achieved my fat loss goals without feeling starved.',
        rating: 5,
        tag: 'Fat Loss',
    },
    {
        name: 'Client B',
        text: 'I finally broke through my plateau and started building clean muscle. The training programs are challenging but incredibly effective.',
        rating: 5,
        tag: 'Muscle Building',
    },
    {
        name: 'Client C',
        text: 'Working with Coach has been the best investment in my health. The online coaching is seamless and the accountability is unmatched.',
        rating: 5,
        tag: 'Online Coaching',
    },
]

export default function ClientResults() {
    return (
        <section id="results" className="section results">
            <div className="container">
                {/* Header */}
                <div className="results__header reveal">
                    <span className="section-label">Real Results</span>
                    <div className="divider" />
                    <h2 className="section-title">
                        Client Results & <span className="red-text">Trust</span>
                    </h2>
                    <p className="section-subtitle">
                        See what our dedicated clients have to say about their experience and success with our programs.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="results__grid reveal-fade">
                    {results.map((item, i) => (
                        <div key={i} className="results__card">
                            <div className="results__stars">
                                {'★'.repeat(item.rating)}
                            </div>
                            <p className="results__text">"{item.text}"</p>
                            <div className="results__meta">
                                <div className="results__avatar">
                                    {item.name[0]}
                                </div>
                                <div>
                                    <p className="results__name">{item.name}</p>
                                    <span className="badge badge-red">{item.tag}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
