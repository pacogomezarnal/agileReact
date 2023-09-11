import { useContext } from "react";
import { ThemeContext } from "../App";

export default function Footer(){
    const {darkTheme,cambiarTheme} = useContext(ThemeContext);
    return(
        <nav class="navbar fixed-bottom bg-body-secondary"
        data-bs-theme={darkTheme?"dark":""}>
            <div class="container-fluid">
                <a class="navbar-brand" href="#">FOOTER</a>
            </div>
        </nav>
    );
}