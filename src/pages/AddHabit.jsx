import React from 'react';
import { useNavigate } from 'react-router-dom';
import HabitForm from '../components/HabitForm';

const AddHabit = () => {
    const navigat = useNavigate();
    const handleAddNewHabitToServer = (newHabitData) => {
        fetch ('http://localhost:3000/habits', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newHabitData),
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network failure encountered while saying');
            }
            return response.json();  
        })
        .then((data) => {
            console.log('successfully saved to DB:', data);
            navigat('/');
        })
        .catch((err) =>{
            console.error('API Post Request FailureL:'.err);
            alert('Could not sync with local database. Check if json-server is active!');
        });
    };

    return (
        <main className="page-layout add habit-page">
            <div className="Page-header">
                <h1>Set New Routines</h1>
                <p>Consistency is key. Design a tracking metric down below.</p>
            </div>

            {/* Passing state action download using props*/}
            <HabitForm onAddHabit={handleAddNewHabitYoServer}/>
        </main>
    );
};

export default AddHabit;