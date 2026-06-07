import React, { useState } from 'react';

const HabitForm = ({ onAddHabit }) => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const [formData, setFormData] = useState({
        name: '', // Changed from title to match db.json
        description: '',
        category: 'Health',
        image: '',
        frequency: 'Daily', 
        status: 'Active'
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');
        setSuccess(false);

        if(!formData.name.trim() || !formData.description.trim()){
            setError('Please fill in both the Name and Description fields.');
            return;
        }
        
        onAddHabit(formData);
        setFormData({ name: '', description: '', category: 'Health', image: '', frequency: 'Daily', status: 'Active' });
        setSuccess(true);
    };

    return(
        <div className='form-container'>
            <h2>Add a new habit track</h2>

            {error && <div className="error-message" style={{color: 'red', marginBottom: '1rem'}}>{error}</div>}
            {success && <div className="success-message" style={{color: 'green', marginBottom: '1rem'}}>Habit successfully logged!</div>}

            <form onSubmit={handleSubmit} className="habit-form">
                <div className="form-group">
                    <label htmlFor="name">Habit Name:</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="e.g., Morning Meditations" />
                </div>

                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <textarea id="description" name="description" value={formData.description} onChange={handleChange} placeholder="Why or how do you want to accomplish this?" />
                </div>

                <div className="form-group">
                    <label htmlFor="category">Category:</label>
                    <select name="category" id="category" value={formData.category} onChange={handleChange}>
                        {/* Aligned with db.json and HabitFilter */}
                        <option value="Health">Health</option>
                        <option value="Fitness">Fitness</option>
                        <option value="Learning">Learning</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="image">Image URL:</label>
                    <input type="url" id="image" name="image" value={formData.image} onChange={handleChange} placeholder="https://example.com/habit-thumbnail.jpg" />
                </div>

                <div className="form-group">
                    <label htmlFor="frequency">Target Frequency:</label>
                    <select name="frequency" id="frequency" value={formData.frequency} onChange={handleChange}>
                        {/* Aligned with db.json and HabitFilter */}
                        <option value="Daily">Daily</option>
                        <option value="Weekly">Weekly</option>
                    </select>
                </div>

                <button type="submit" className="submit-btn">Save Habit</button>
            </form>
        </div>
    );
};

export default HabitForm;