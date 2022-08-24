import './MainSite.css';
import logo from './logo.svg'

function MainSite() {
    let url="#content";
    return (
        <div className="App">
            <header className="App-header">
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet"
                      integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx"
                      crossOrigin="anonymous"/>
                livechat()
            </header>
            <body>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"
                    integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa"
                    crossOrigin="anonymous"></script>
            <section className="main">
                <div className="background">
                    <div className="navigator">
                        <img src={logo} className="logo"/>
                        <ul>
                            <li><a href="#main">Impressum</a></li>
                            <li><a href="#content">About us</a></li>
                            <li><a href="#">Login</a></li>
                        </ul>
                    </div>
                    <div className="info">
                        <h1>Help-Nation</h1>
                        <p>Willkommen auf unserer Seite, dies ist ein Fill Text weil ich keine Ahnung habe was hier rein
                            kommt.</p>
                    </div>
                </div>
            </section>
            <section id="content" className="content">
                <div className="container">
                    <h1>Über Uns:</h1>
                    <p>Unser Ansatz als Firma wird es sein Menschen zu helfen, in jeglichen Bereichen des Lebens oder des Weiterentwickelns, egal ob man den Wissensstand erweitern möchte oder Skills. Hierzu vermitteln wir die Kunden and die passenden stellen weiter und übernemen alles was da sonst noch anfällt drum und bieten kostenlose Therapiestunden an, die aber eine langfristige nicht ersetzen können, trotzdessen ein nettes Angbot sein soll für Leute, die sich schwer tun einen Therapieplatz zu finen. (Text von Jannes)</p>
                </div>
            </section>
            </body>
            <footer>
                <div className="footerContainer">
                    <p>Copyright © Help-Nation 2022 | Made with love in Berlin.</p>
                </div>
            </footer>
        </div>
    );
}

export default MainSite;
