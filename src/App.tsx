
import HomePage from './pages/HomePage/HomePage'
import Layout from './components/Layout/Layout'
import { Route, Routes } from 'react-router-dom'
import Docs from './components/Docs/Docs'

function App() {

  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<HomePage/>}/>
            <Route path='docs' element={<Docs/>}/>
          </Route>
        </Routes>
      </div>
    </>
  )
}

export default App
