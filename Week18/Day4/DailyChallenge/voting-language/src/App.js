import './App.css';
import { useState } from 'react';

function App() {
  const [languages, setLanguages] = useState([
                                            {name: "Php", votes: 0},
                                            {name: "Python", votes: 0},
                                            {name: "JavaSript", votes: 0},
                                            {name: "Java", votes: 0}
                                          ])
  const vote= (nam) => {
    setLanguages((prev) => prev.map((language) => language.name === nam? {...language, votes: language.votes + 1}: language))
  }                                        
  return (
    <div className="App">
      <ul style={{listStyle:"none", width: "50%", margin: "auto"}}>
        {languages.map((language) =>{
        return <li style={{backgroundColor:"beige", border: "1px solid black", width: "400px", padding: "20px"}} key={language.name}><span className='counter'>{language.votes}</span><span className='languageName'>{language.name}</span><span className='clicky' onClick={()=>vote(language.name)}>Click Here</span></li>
      })}
      </ul>

    </div>
  );
}

export default App;
