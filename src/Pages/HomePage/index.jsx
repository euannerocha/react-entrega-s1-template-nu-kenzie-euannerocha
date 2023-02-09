import './homePage.css'
import imageHomePage from "../../images/Group262.png"

function HomePage({ setPage }) {
    return (
        <div className="coverHomePage">
            <div className="containerMainPage">
                <div className="titleHomePage">
                    <h1 className="titleHomePageNu">Nu</h1>
                    <h1 className="titleHomePageKenzie">Kenzie</h1>
                </div>
                <h2 className="descriptionHomePage">Centralize o controle das suas finanças</h2>
                <p className="textHomePage">de forma rápida e segura</p>
                <button className="buttonHomePage" onClick={() => setPage('dashboard')}>Iniciar</button>
            </div>
            <div className="divImageHomePage">
                <img className="imgHomePage" src={imageHomePage} />
            </div>
        </div>
    )
}

export default HomePage