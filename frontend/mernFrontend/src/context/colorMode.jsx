import {createContext, useContext, useState } from "react";

const ColorModeContext = createContext()

export const  ColorModeContextProvider = ({children}) => {
    const [colorMode,SetColorMode] = useState("light")

    const toggleColorMode = () =>{ SetColorMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light') );}
    return(
        <ColorModeContext.Provider value = {{colorMode,toggleColorMode}}>
            {children}
        </ColorModeContext.Provider>
    )
}
export const useColorMode = () => {
    return useContext(ColorModeContext)
}
