import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import MovieDetail from './pages/MovieDetail'
import About from './pages/About'
// import Upload from './pages/Upload'  // ← Comment this out
import './index.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/upload" element={<Upload />} /> */}  {/* ← Comment this out */}
      </Routes>
    </BrowserRouter>
  )
}

export default App