import { useState } from "react";
import Layout from "./layout/Layout";
import Todo from "./todo/Todo";


export default function App(){
    const [darkTheme, setDarkTheme] = useState(false);

    const cambiarDarkTheme = () => setDarkTheme(!darkTheme);

    return(
        <Layout darkTheme={darkTheme} cambiarTheme={cambiarDarkTheme}>
            <Todo darkTheme={darkTheme}/>
        </Layout>
    );
}