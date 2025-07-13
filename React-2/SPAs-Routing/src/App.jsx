import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom' 

function App () {
  return (
    <div>
      <BrowserRouter>
      <Link to="/first/name">First Name</Link> | <Link to="/last/name">Last Name</Link> | <Link to="/full/name">Full Name</Link> 
      <Link to="/"><button>HOME</button></Link>
      <Link to="*"></Link>
      <Routes>
        <Route path="/first/name" element= {<FirstName />} />
        <Route path="/last/name" element= {<LastName />} />
        <Route path="/full/name" element= {<FullName />} />
        <Route path="*" element= {<ErrorPage />} />
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

const ErrorPage = () => {
  return(
    <div>
        page not found
    </div>
  )
}

export default App;