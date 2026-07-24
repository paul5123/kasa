import { Link } from 'react-router-dom'
import './Error.scss'

function Error() {
  return (
    <section className="error">
      <h1 className="error__code">404</h1>

      <p className="error__message">
        Oups ! La page que vous demandez n'existe pas.
      </p>

      <Link className="error__link" to="/">
        Retourner sur la page d’accueil
      </Link>
    </section>
  )
}

export default Error