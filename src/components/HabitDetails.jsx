function HabitDetails({ habit }) {
  return (
    <div className="habit-details">
      <div className="habit-details-header">
        <h2>{habit.name}</h2>
        <span className={`status-badge ${habit.status.toLowerCase()}`}>
          {habit.status}
        </span>
      </div>

      <p className="habit-description">{habit.description}</p>

      <div className="habit-meta">
        <div className="meta-item">
          <span className="meta-label">Goal</span>
          <span className="meta-value">{habit.goal}</span>
        </div>
        <div className="meta-item">
          <span className="meta-label">Category</span>
          <span className="meta-value">{habit.category}</span>
        </div>
        <div className="meta-item">
          <span className="meta-label">Frequency</span>
          <span className="meta-value">{habit.frequency}</span>
        </div>
        <div className="meta-item">
          <span className="meta-label">Status</span>
          <span className="meta-value">{habit.status}</span>
        </div>
      </div>
    </div>
  );
}

export default HabitDetails;
