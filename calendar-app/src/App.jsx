import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Calendar from './pages/CalendarPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>일정 관리</h1>
      <div>Calender</div>
      <Routes>
        <Route path="/" element={<Calendar />} />
      </Routes>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
