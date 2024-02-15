import './App.css'
import Character from './pages/character';
import Characters from './pages/characters'
import {Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <div className='App'>
      <Routes>
        <Route  exact path="/" element={<Characters/>}/>
        <Route  exact path="/:id" element={<Character/>}/>
      </Routes>
      
      </div>
    </>
  )
}

export default App
