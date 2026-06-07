import React, { useState } from 'react';

const HabitForm = ({ onAddHabit }) => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        category: 'Health',
        image: '',
        frequncy: 'Daily',
        status: 'Active'
    });
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

        if(!formData.title.trim() || !formData.description.trim()){
            setError('Please fill in both the Title and Description fields.');
            return;
        }
        onAddHabit(formData);
        setFormData({
            title: '',
            description: '',
            category: 'Health',
            image: '',
            frequency: 'Daily',
            status: 'Active'
        });
        setSuccess(true);
    };

    return(
        <div className='form-container'>
            <h2>Add a new habit track</h2>

            {/*conditional Rendering UI Notification*/}
            {error && <div className="error-message" style ={{color: 'red', marginBottom: '1rem'}}>{error}</div>}
            {success && <div className="success-message"style={{color: 'green', marginBottom: '1rem'}}>Habit successfully logged!</div>}

            <form onSubmit={handlesubmit}className="habit-form">
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

                <div>
                    <label htmlFor="description">Description:</label>
                    <textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Why or how do you want to accomplish this?"
                    />
                </div>

                <div ClassName="form-group">
                    <label htmlFor="description">Description:</label>
                    <textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Why or how do you want to accomplish this?"
                    />
                </div>

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
                    <select name="frequency" id="frequency" value={formData.frequency} onChange={handleChange}>
                        <option value="Daily">Daily</option>
                        <option value="Weekly">Weekly</option>
                        <option value="Monthly">Monthly</option>
                    </select>
                </div>

                <button type="submit" className="submit-btn">Save Habit</button>
            </form>
        </div>
    );
};

export default HabitForm;