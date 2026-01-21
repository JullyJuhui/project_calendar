import './App.css'
import { Route, Routes } from 'react-router-dom'
import Calendar from './components/pages/CalendarPage'
import Header from './components/include/Header'

function App() {

  return (
    <>
      <Header />
      <div>Calender</div>
      <Routes>
        <Route path="/" element={<Calendar />} />
        {/* <Route path="/atCalendar" element={<AtCalendarPage />} /> */}
      </Routes>
    </>
  )
}

export default App
