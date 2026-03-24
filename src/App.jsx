import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Herculabs from './pages/case-studies/Herculabs'
import Rajang from './pages/case-studies/Rajang'
import BabyCircle from './pages/case-studies/BabyCircle'

// Scroll to top on every route change
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects/herculabs" element={<Herculabs />} />
        <Route path="/projects/rajang" element={<Rajang />} />
        <Route path="/projects/babycircle" element={<BabyCircle />} />
      </Routes>
    </BrowserRouter>
  )
}
