import { useState, useEffect } from 'react';
import HabitList from '../components/HabitList';
import Habitfilter from '../components/Habitfilter';

function Habits() {
  const [habits, setHabits] = useState([]);
  const [filters, setFilters] = useState({
    category: 'All',
    status: 'All',
    frequency: 'All',
  });

  useEffect(() => {
    fetch('http://localhost:3000/habits')
      .then((res) => res.json())
      .then((data) => setHabits(data));
  }, []);

  const filteredHabits = habits.filter((habit) => {
    if (filters.category  !== 'All' && habit.category  !== filters.category)  return false;
    if (filters.status    !== 'All' && habit.status    !== filters.status)    return false;
    if (filters.frequency !== 'All' && habit.frequency !== filters.frequency) return false;
    return true;
  });

  return (
    <div className="habits-page">
      <h1>My Habits</h1>
      <Habitfilter filters={filters} onChange={setFilters} />
      <HabitList habits={filteredHabits} />
    </div>
  );
}

export default Habits;