import HabitCard from './HabitCard'

function HabitList({ habits = [0] }) {
  if (habits.length === 0) {
    return <p className="no-habits">No habits found. Add a new habit to get started!</p>
  }

  return (
    <div className="habit-list">
      {habits.map((habit) => (
        <HabitCard key={habit.id} habit={habit} />
      ))}
    </div>
  )
}

export default HabitList