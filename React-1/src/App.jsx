import Counter from './hooks/useState/Counter'
import Timer from './hooks/useEffect/UserData'
import LinkedinTopbar from './hooks/useState/LinkedinTopbar'
import Error_Boundary from './Error_Boundary'
import './App.css'
import UserData from './hooks/useEffect/UserData'
import Cr from './cr/CR'
import Props from './props_children/Props'
import Card from './props_children/Card'
import ProfileCard from './props_children/ProfileCard'


function App() {
  
  return (
      <div>
        {/* <Counter /> */}
        <UserData />
        {/* <LinkedinTopbar /> */}
        {/* <Error_Boundary /> */}
        {/* <Props title="iPhone" price="10000" /> */}
        {/* <Cr />   */}
         {/* <Props /> */}
         {/* <ProfileCard /> */}
        {/* <Card /> */}
      </div>
  )
}

export default App;
