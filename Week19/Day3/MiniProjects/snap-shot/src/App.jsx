import { useState,useEffect } from 'react'
import './App.css'
import {Routes, Route, Link, useNavigate} from 'react-router-dom';
import { Pictures } from './components/Pictures';
function App() {
  const [categories, setCategories] =  useState(["Mountain", "Beaches", "Birds", "Food"]);
  const navigate = useNavigate()

  const mySearch = (term) => {
    navigate(`/${term}`)
  }
  const handleSubmit= (e) => {
    e.preventDefault();
    console.log(e.target.search.value)
    mySearch(e.target.search.value);
  }

  useEffect(()=>{
    mySearch(categories[0])
  }, [])
  return (
    <>
      <header>
        <h1>Snapshot App</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input name='search' /><input type={"submit"} value={"Search"}/>
        </form>
      </header>
      <nav>
          {categories.map((item) => {
            return (<Link to={`/${item}`} key={item} style={{display: "inline-block", padding: "5px", backgroundColor: "#000", color: "#fff", margin: "10px", borderRadius: "5px"}}>{item}</Link>)
          } )
          }
      </nav>
      <Routes>
          <Route path='/:keyword' element={<Pictures/>}/>
      </Routes>          
    </>
    
  )
}

export default App