import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar_brand">
        <p className="navbar_brandname">HabitTracker</p>
      </div>

      <ul className="navbar_links">
        <li>
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? 'navbar_link navbar_link--active' : 'navbar_link'
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/add-habit"
            className={({ isActive }) =>
              isActive ? 'navbar_link navbar_link--active' : 'navbar_link'
            }
          >
            Add Habit
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? 'navbar_link navbar_link--active' : 'navbar_link'
            }
          >
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar

