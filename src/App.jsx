import Footer from "./Component/Footer"
import Header from "./Component/Header"
import { Outlet } from "react-router-dom"
import { Provider } from "react-redux"
import appStore from "./Utils/appStore"

function App() {
  

  return (
  <div className="bg-purple-100">
    <Provider store={appStore}> 
    <Header />
    <Outlet />
    <Footer />
    </Provider>
    
  </div>
  )
}

export default App
