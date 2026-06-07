function Home() {
    return (
        <div className="home">

            <section className="home-intro">
                <h1>Build habits that stick.</h1>
                <p>
                    Our Habit Tracker helps you track your daily habits,
                    measure your progress and consistency,
                    and use that information to drive yourself to improve.
                </p>
            </section>

            <section className="home-features">
                <div className="feature-card">
                    <h3>Track daily</h3>
                    <p>Check off your habits each day with only a single click.</p>
                </div>
                <div className="feature-card">
                    <h3>Maintain your streak</h3>
                    <p>Watch your consistency grow day after day.</p>
                </div>
                <div className="feature-card">
                    <h3>Stay focused</h3>
                    <p>Focus on tracking what you want to achieve.</p>
                </div>
            </section>
        </div>
    )
}

export default Home