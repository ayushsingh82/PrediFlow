import { Outlet } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-pink-light">
      {/* You can add header/navigation here */}
      <Outlet />
      {/* You can add footer here */}
    </div>
  )
}

export default App
