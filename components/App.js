import { useState, createContext } from "react";
import Layout from "./layout/Layout";
import Todo from "./todo/Todo";

export const ThemeContext = createContext({})

export default function App(){
    const [darkTheme, setDarkTheme] = useState(false);

    const cambiarDarkTheme = () => setDarkTheme(!darkTheme);

    return(
        <ThemeContext.Provider value={{darkTheme,cambiarDarkTheme}}>
            <Layout>
                <Todo darkTheme={darkTheme}/>
            </Layout>
        </ThemeContext.Provider>
    );
}