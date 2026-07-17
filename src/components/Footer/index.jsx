import logoWhite from '../../assets/logoWhite.png'
import './Footer.scss'

function Footer() {
  return (
    <footer className="footer">
      <img src={logoWhite} alt="Logo Kasa" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer