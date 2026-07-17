import { Link } from 'react-router-dom'
import logoImage from '../../assets/LOGO.png'
import './Header.scss'

function Header() {
  return (
    <header className='kasa-header'>
      <img src={logoImage} alt="Logo" />
      <ul className='list-header'>
        <li>
          <Link to="/">Accueil</Link>
          </li>
        <li> 
          <Link to="/about">À propos</Link>
          </li>
      </ul>
    </header>
  )
}

export default Header