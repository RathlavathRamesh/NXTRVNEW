import React from 'react' 

const ThemeContext=React.createContext({
    blacktheme:true,
    changeTheme:()=>{}
})

export default ThemeContext; 