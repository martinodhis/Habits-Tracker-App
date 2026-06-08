import { useState } from 'react'

const HabitForm = ({ onAddHabit }) => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        category: 'Health',
        image: '',
        frequncy: 'Daily',
        status: 'Active'
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const handleChange = (e) =>{
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');
        setSuccess(false);

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')
    setSuccess(false)

    if (!formData.name.trim() || !formData.description.trim()) {
      setError('Please fill in both the Title and Description fields.')
      return
    }

            <form onSubmit={handleSubmit} className="habit-form">
                <div className="form-group">
                    <label htmlFor="title">Habit Title:</label>
                    <input
                       type="text"
                       id="title"
                       name="title"
                       value={formData.title}
                       onChange={handleChange}
                       placeholder="e.g., Morning Meditations"  
                    ></input>
                </div>

  return (
    <div className="form-container">
      <h2>Add a new habit</h2>

                <div>
                    <label htmlFor="category">Category:</label>
                    <select name="category" id="category" value={formData.category} onChange={handleChange}>
                        <option value="Health">Health & Fitness</option>
                        <option value="Mind">Mind & Focus</option>
                        <option value="Finance">Finance & Budgeting</option>
                        <option value="Social">Social & Relationship</option>
                    </select>
                </div>

        <div className="form-group">
          <label htmlFor="category">Category:</label>
          <select
            name="category"
            id="category"
            value={formData.category}
            onChange={handleChange}
          >
            <option value="Health">Health & Fitness</option>
            <option value="Mind">Mind & Focus</option>
            <option value="Finance">Finance & Budgeting</option>
            <option value="Social">Social & Relationship</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="image">Image URL:</label>
          <input
            type="url"
            id="image"
            name="image"
            value={formData.image}
            onChange={handleChange}
            placeholder="https://example.com/habit-thumbnail.jpg"
          />
        </div>

        <div className="form-group">
          <label htmlFor="frequency">Target Frequency:</label>
          <select
            name="frequency"
            id="frequency"
            value={formData.frequency}
            onChange={handleChange}
          >
            <option value="Daily">Daily</option>
            <option value="Weekly">Weekly</option>
            <option value="Monthly">Monthly</option>
          </select>
        </div>

        <button type="submit" className="submit-btn">Save Habit</button>
      </form>
    </div>
  )
}

export default HabitForm