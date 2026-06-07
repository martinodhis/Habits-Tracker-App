import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

// Layout components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home             from './pages/Home';
import About            from './pages/About';
import AddHabit         from './pages/AddHabit';
import Habits           from './pages/Habits';
import HabitDetailsPage from './pages/HabitDetails';

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <main>
        <Routes>
          <Route path="/"           element={<Home />} />
          <Route path="/about"      element={<About />} />
          <Route path="/add-habit"  element={<AddHabit />} />
          <Route path="/habits"     element={<Habits />} />
          <Route path="/habits/:id" element={<HabitDetailsPage />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
