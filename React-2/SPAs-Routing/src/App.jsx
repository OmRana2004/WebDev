import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom' 

function App () {
  return (
    <div>
      <BrowserRouter>
      <Link to="/first/name">OM</Link> | <Link to="/last/name">RANA</Link> | <Link to="/full/name">OM RANA</Link>
      <Routes>
        <Route path="/first/name" element= {<FirstName />} />
        <Route path="/last/name" element= {<LastName />} />
        <Route path="/full/name" element= {<FullName />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
} 

const FirstName = () => {
  return(
    <div>
      OM
    </div>
  )
}

const LastName = () =>{
  return (
    <div>
      Rana
    </div>
  )
}

const FullName = () => {
  return(
    <div>
      OM RANA
    </div>
  )
}

export default App;