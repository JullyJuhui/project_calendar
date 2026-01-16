import './App.css'
import { Route, Routes } from 'react-router-dom'
import Calendar from './pages/CalendarPage'
import Header from './include/Header'

function App() {

  return (
    <>
      <Header />
      <div>Calender</div>
      <Routes>
        <Route path="/" element={<Calendar />} />
      </Routes>
    </>
  )
}

export default App
