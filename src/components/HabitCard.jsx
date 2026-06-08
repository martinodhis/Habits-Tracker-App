import { Link } from 'react-router-dom'

function HabitCard({ habit }) {
  return (
    <div className="habit-card">
      {habit.image && <img src={habit.image} alt={habit.name} className="habit-image" />}
      <div className="habit-info">
        <h3>{habit.name}</h3>
        <p className="habit-description">{habit.description}</p>
        <p className="habit-category"><strong>Category:</strong> {habit.category}</p>
        <p className="habit-status"><strong>Status:</strong> {habit.status}</p>
        <Link to={`/habits/${habit.id}`} className="view-details-btn">View Details</Link>
      </div>
    </div>
  )
}
export default HabitCard

