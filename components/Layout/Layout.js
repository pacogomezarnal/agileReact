import Header from "./Header";
import Footer from "./Footer";


export default function Layout(props){

    return(
        <div>
            <Header></Header>
            {props.children}
            <Footer></Footer>
        </div>
    );
}