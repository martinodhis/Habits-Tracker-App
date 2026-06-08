import HabitList from '../components/HabitList';

function Home({ habits, loading, error }) {
    if (loading) return <p className="status-message">Loading habits...</p>;
    if (error) return <p className="status-message error">{error}</p>;

    return (
        <div className="page-layout home">
            <div className="page-header">
                <h1>Build habits that stick.</h1>
                <p>
                    Our Habit Tracker helps you track your daily habits,
                    measure your progress and consistency,
                    and use that information to drive yourself to improve.
                </p>
            </div>

            <h2 style={{ marginTop: '2rem', marginBottom: '1rem' }}>Your Habits</h2>
            <HabitList habits={habits} />
        </div>
    )
}

export default Home