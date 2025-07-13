import Counter from './hooks/useState/Counter'
import Timer from './hooks/useEffect/UserData'
import LinkedinTopbar from './hooks/useState/LinkedinTopbar'
import Error_Boundary from './Error_Boundary'
import './App.css'
import UserData from './hooks/useEffect/UserData'
import Cr from './cr/CR'


function App() {
  
  return (
      <div>
        <Counter />
        {/* <UserData /> */}
        {/* <LinkedinTopbar /> */}
        {/* <Error_Boundary /> */}
        <Cr />  
      </div>
  )
}

export default App;
