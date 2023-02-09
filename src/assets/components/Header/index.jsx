import './header.css'

export function Header({ setPage }) {
    return (
        <header>
            <div>
                <h1 className="titleNu">Nu</h1>
                <h1 className="titleKenzie">Kenzie</h1>
            </div>
            <button onClick={() => setPage('homePage')}>Início</button>
        </header>
    )
}

export default Header;