import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import FirstPage from './pages/firstPage'
import AboutPage from './pages/aboutPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<FirstPage />}></Route>
        <Route exact path="/about-page" element={<AboutPage />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
