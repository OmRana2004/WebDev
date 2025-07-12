import Counter from './Counter'
import Timer from './Timer'
import LinkedinTopbar from './linkedinTopbar'
import Error_Boundary from './Error_Boundary'
import './App.css'


function App() {
  
  return (
      <div>
        <Counter />
        {/* <Timer /> */}
        {/* <LinkedinTopbar /> */}
        <Error_Boundary />
      </div>
  )
}

export default App;
