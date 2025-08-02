import { useEffect, useState } from "react"
import { ThemeProvider } from "./context/theme"
import ThemeBtn from "./component/ThemeBtn"
import Card from "./component/Card"


function App() {
  const [themeMode,setthemeMode]= useState("light")
  // method will pass to themecontext or if you use the useTheme  
  const lightTheme =()=>{
    setthemeMode("light")
  }
  const darkTheme =()=>{
    setthemeMode("dark")
  }
// acutal change in the theme 
  useEffect(()=>{
 const html = document.querySelector('html')
 // remove the  theme 
   html.classList.remove("light","dark")
   html.classList.add(themeMode)
    } ,[themeMode])
  return (

<ThemeProvider value={{themeMode,lightTheme,darkTheme}}>
 <div className="flex flex-wrap min-h-screen items-center">
    <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                       <ThemeBtn/>
                        
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                      <Card/>
                    </div>
    </div>
</div>
</ThemeProvider>  

  )
}

export default App
