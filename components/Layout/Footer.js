export default function Footer({darkTheme}){
    return(
        <nav class="navbar fixed-bottom bg-body-secondary"
        data-bs-theme={darkTheme?"dark":""}>
            <div class="container-fluid">
                <a class="navbar-brand" href="#">FOOTER</a>
            </div>
        </nav>
    );
}