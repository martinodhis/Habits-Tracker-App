import { useNavigate } from 'react-router-dom'
import HabitForm from '../components/HabitForm'

function AddHabit({ onHabitAdded }) {
  const navigate = useNavigate()

  const handleAddNewHabitToServer = (newHabitData) => {
    fetch('http://localhost:3000/habits', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newHabitData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network failure encountered while saving')
        }
        return response.json()
      })
      .then((data) => {
        console.log('Successfully saved to DB:', data)
        onHabitAdded(data)
        navigate('/')
      })
      .catch((err) => {
        console.error('API Post Request Failure:', err)
        alert('Could not sync with local database. Check if json-server is active!')
      })
  }

  return (
    <main className="page-layout add-habit-page">
      <div className="page-header">
        <h1>Set New Routines</h1>
        <p>Consistency is key. Design a tracking metric down below.</p>
      </div>

      <HabitForm onAddHabit={handleAddNewHabitToServer} />
    </main>
  )
}

export default AddHabit