import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Herculabs from './pages/case-studies/Herculabs'
import Rajang from './pages/case-studies/Rajang'
import BabyCircle from './pages/case-studies/BabyCircle'
import Muafakat from './pages/case-studies/Muafakat'
import MoviePlug from './pages/case-studies/MoviePlug'

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
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects/herculabs" element={<Herculabs />} />
        <Route path="/projects/rajang" element={<Rajang />} />
        <Route path="/projects/babycircle" element={<BabyCircle />} />
        <Route path="/projects/muafakat" element={<Muafakat />} />
        <Route path="/projects/movieplug" element={<MoviePlug />} />
      </Routes>
    </BrowserRouter>
  )
}
