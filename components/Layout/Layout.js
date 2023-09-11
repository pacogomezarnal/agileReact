import Header from "./Header";
import Footer from "./Footer";


export default function Layout(props){
    return(
        <div>
            <Header cambiarTheme={props.cambiarTheme} darkTheme={props.darkTheme}></Header>
            {props.children}
            <Footer darkTheme={props.darkTheme}></Footer>
        </div>
    );
}