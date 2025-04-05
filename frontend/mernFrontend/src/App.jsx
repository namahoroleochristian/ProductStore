import { useColorMode } from "./context/ThemeContext"
import RoutesPage from "./Routes/RoutesPage"


const App = () => {
  const {colorMode} = useColorMode()
  
  return(
    // <div className={`${colorMode==='light'?'bg-white':'bg-slate-600'} min-h-screen`}>
<div className= {`${colorMode === 'light' ? 'bg-slate-100':'bg-slate-700' } min-h-screen`}>
      <RoutesPage />
    </div>
  
  )
}
export default App