function About() {
    return (
        <div className="page-layout about">
            <div className="page-header">
                <h1>About Habit Tracker</h1>
            </div>

            <section className="about-intro" style={{ marginBottom: '2rem' }}>
                <p>
                    Habit Tracker is a simple habit tracker built with React.
                    It helps you log daily habits of your choosing, build streaks,
                    and stay consistent over time.
                </p>
            </section>

            <section className="about-details">
                <h2>How it works</h2>
                <ul>
                    <li>Add habits you want to build.</li>
                    <li>Check them off every day.</li>
                    <li>Come back daily to keep your streak going.</li>
                </ul>

                <h2 style={{ marginTop: '2rem' }}>This project was built using:</h2>
                <ul>
                    <li>React</li>
                    <li>Javascript</li>
                    <li>CSS</li>
                </ul>
            </section>
        </div>
    )
}

export default About