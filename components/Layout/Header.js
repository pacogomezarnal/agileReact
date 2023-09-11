import { useContext } from "react";
import { ThemeContext } from "../App";


export default function Header(){
    const {darkTheme,cambiarDarkTheme} = useContext(ThemeContext);
    return(
        <nav 
        className="navbar fixed-top bg-body-secondary"
        data-bs-theme={darkTheme?"dark":""}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Agile Pile</a>
                <div className="form-check form-switch">
                    <input class="form-check-input" 
                    type="checkbox" role="switch" 
                    id="flexSwitchCheckDefault" 
                    checked={darkTheme===true}
                    onChange={()=>{cambiarDarkTheme();}}/>
                    <label className={darkTheme?"form-check-label text-light":"form-check-label"} for="flexSwitchCheckDefault">Oscuro</label>
                </div>
            </div>
        </nav>
    );
}