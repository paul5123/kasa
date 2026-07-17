import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import About from './pages/About'
import Error from './pages/Error'
import Home from './pages/Home'
import Housing from './pages/Housing'


function App() {
  return (
<Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/housing/:id" element={<Housing />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </Router>
    )
    }

    export default App