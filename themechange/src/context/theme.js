import { createContext,useContext } from "react";

export const Themecontext = createContext({
    themeMode:"light",
    darkTheme: ()=>{},
    lightTheme: ()=>{}
} )
// defaut value 
export const ThemeProvider = Themecontext.Provider
// his is exporting the Provider from the context so that
//  other parts of your app can wrap their components with it.

export default  function useTheme(){
    return useContext(Themecontext);
    
}
// Uses useContext(Themecontext) to get access to whatever values are 
// currently in the Theme Context.
// Returns those values so you can use them in your components like this: