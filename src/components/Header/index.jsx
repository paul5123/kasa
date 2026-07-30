import { NavLink } from 'react-router-dom'
import logoImage from '../../assets/LOGO.png'
import './Header.scss'

function Header() {
  return (
    <header className="kasa-header">
      <NavLink to="/">
        <img src={logoImage} alt="Logo Kasa" />
      </NavLink>

      <nav>
        <ul className="list-header">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? 'active' : ''
              }
            >
              Accueil
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? 'active' : ''
              }
            >
              À propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header