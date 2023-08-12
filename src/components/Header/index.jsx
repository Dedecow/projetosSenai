

function Header (){
    const Cabecalho = ( 
        <header>
          <nav class="navbar navbar-expand-lg primary-bg-color py-4 px-2 border border-dark border-4" id="navbar">
            <div>
                <a href="index.html" class="navbar-brand">Devinhouse Pharma</a>
            </div>
             
             <div>
                <button class="navbar-toggler" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#bottom-navbar" 
                aria-controls="bottom-navbar" 
                aria-expanded="false"
                aria-label="Toggle navigation">
                    <i class="bi bi-list"></i>
                </button>
            </div>
            <div class="collapse navbar-collapse" id="bottom-navbar">
                <ul class="navbar-nav mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a href="index.html" class="nav-link">Todos os Remédios</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">Sobre Nós</a>
                    </li>
                    <li class="nav-item">
                        <a href="contato.html" class="nav-link">Fale conosco</a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
    )
    return(
        <p> Componente Header </p>
    )
}
export { Header };