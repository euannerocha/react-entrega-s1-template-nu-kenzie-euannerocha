import './homePage.css'

function HomePage({ setPage }) {
    return (
        <div className="coverHomePage">
            <div className="titleHomePage">
                <h1 className="titleHomePageNu">Nu</h1>
                <h1 className="titleHomePageKenzie">Kenzie</h1>
            </div>
            <h2 className="descriptionHomePage">Centralize o controle das suas finanças</h2>
            <p className="textHomePage">de forma rápida e segura</p>
            <button className="buttonHomePage" onClick={() => setPage('dashboard')}>Iniciar</button>
            <img className="imgHomePage" src="./src/images/Group 262.png" />
        </div>
    )
}

export default HomePage