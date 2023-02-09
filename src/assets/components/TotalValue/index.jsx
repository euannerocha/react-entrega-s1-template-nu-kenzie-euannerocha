import './totalValue.css'

export function Total({ value }) {
    return (
        <div className="divTotalValue">
            <div className='titleAndValue'>
                <h1 className="title">Valor total:</h1>
                <p className="value">{`R$ ${value}`}</p>
            </div>
            <div className='text'>
                <p>O valor se refere ao saldo</p>
            </div>
        </div>
    )
}

export default Total;