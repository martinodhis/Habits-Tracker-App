import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import HabitDetails from '../components/HabitDetails';

function HabitDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [habit, setHabit] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/habits/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error('Habit not found');
        return res.json();
      })
      .then((data) => {
        setHabit(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p className="status-message">Loading habit...</p>;
  if (error) return <p className="status-message error">{error}</p>;

  return (
    <div className="habit-details-page">
      <button className="back-btn" onClick={() => navigate(-1)}>
        &larr; Back
      </button>
      <HabitDetails habit={habit} />
    </div>
  );
}

export default HabitDetailsPage;