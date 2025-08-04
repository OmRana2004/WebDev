import './App.css';
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil';
import { jobsAtom, messingAtom, networkAtom, notificationsAtom } from './atoms';


function App() {
  return <RecoilRoot>
    <MainApp />
  </RecoilRoot>
}


function MainApp() {
  const networkNotificationCount = useRecoilValue(networkAtom);
  const jobsAtomCount = useRecoilValue (jobsAtom)
  const [messingAtomCount, setMessingAtomCount] = useRecoilState (messingAtom);
  const notificationsAtomCount = useRecoilValue (notificationsAtom);
  

  return (
    <>
    <button>Home</button>

    <button>My network({networkNotificationCount >=100 ? "99+" : networkNotificationCount})</button>
    <button>Jobs ({jobsAtomCount})</button>
    <button onClick={() => setMessingAtomCount (messingAtomCount + 1)}>Messaging ({messingAtomCount})</button>
    <button>Notifications ({notificationsAtomCount})</button>

    <button>Me</button>
    </>
  )
}

export default App;