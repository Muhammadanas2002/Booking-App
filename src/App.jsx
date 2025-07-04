import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/home/Home'
import List from './pages/list/List'
import Hotel from './pages/hotel/Hotel'
function App
  () {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>

        <Routes>

          <Route path='/' element={<Home />}>
          </Route>
          <Route path='/hotels' element={<List />}>
          </Route>
          <Route path='/hotels/:id' element={<Hotel />}>
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
