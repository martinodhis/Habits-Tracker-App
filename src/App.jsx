import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import HabitDetails from './pages/HabitDetails'
import AddHabit from './pages/AddHabit'
import About from './pages/About'
import './App.css' 

function App() {
  const [habits, setHabits] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('http://localhost:3000/habits')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch habits')
        return res.json()
      })
      .then((data) => {
        setHabits(data)
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  const addHabit = (newHabit) => {
    fetch('http://localhost:3000/habits', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newHabit)
    })
      .then((res) => {
        if (!res.ok) throw new Error('Failed to add habit')
        return res.json()
      })
      .then((addedHabit) => {
        setHabits(prevHabits => [...prevHabits, addedHabit])
      })
      .catch((err) => setError(err.message))
  }

  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home habits={habits} loading={loading} error={error} />} />
          <Route path="/habits/:id" element={<HabitDetails />} />
          <Route path="/add-habit" element={<AddHabit />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App