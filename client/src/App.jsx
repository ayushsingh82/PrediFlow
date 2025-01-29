import { Outlet } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <>
      {/* You can add header/navigation here */}
      <Outlet />
      {/* You can add footer here */}
    </>
  )
}

export default App
