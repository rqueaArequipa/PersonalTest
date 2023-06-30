import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Index from './pages';
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
