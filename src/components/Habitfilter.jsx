const CATEGORIES = ['All', 'Health', 'Fitness', 'Learning'];
const STATUSES = ['All', 'Active', 'Paused', 'Completed'];
const FREQUENCIES = ['All', 'Daily', 'Weekly'];

function HabitFilter({ filters, onChange }) {
  return (
    <div className="habit-filter">
      <div className="filter-group">
        <label htmlFor="category-filter">Category</label>
        <select id="category-filter" name="category" value={filters.category} onChange={(e) => onChange({ ...filters, category: e.target.value })}>
          {CATEGORIES.map((cat) => (<option key={cat} value={cat}>{cat}</option>))}
        </select>
      </div>

      <div className="filter-group">
        <label htmlFor="status-filter">Status</label>
        <select id="status-filter" name="status" value={filters.status} onChange={(e) => onChange({ ...filters, status: e.target.value })}>
          {STATUSES.map((status) => (<option key={status} value={status}>{status}</option>))}
        </select>
      </div>

      <div className="filter-group">
        <label htmlFor="frequency-filter">Frequency</label>
        <select id="frequency-filter" name="frequency" value={filters.frequency} onChange={(e) => onChange({ ...filters, frequency: e.target.value })}>
          {FREQUENCIES.map((freq) => (<option key={freq} value={freq}>{freq}</option>))}
        </select>
      </div>
    </div>
  );
}

export default HabitFilter;