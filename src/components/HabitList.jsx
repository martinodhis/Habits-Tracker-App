import HabitCard from './HabitCard'

function HabitList({ habits }) {
  // Conditional Rendering: Empty state
  if (habits.length === 0) {
    return <p className="no-habits">No habits found. Add a new habit to get started!</p>
  }

  // Rendering Lists Using map()
  return (
    <div className="habit-list">
      {habits.map((habit) => (
        <HabitCard key={habit.id} habit={habit} />
      ))}
    </div>
  )
}
export default HabitList