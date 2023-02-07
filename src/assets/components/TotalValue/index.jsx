export function Total({value}){
    return(
        <div>
            <h1 className="title">Valor total:</h1>
            <p className="value">{value}</p>
            <p>O valor se refere ao saldo</p>
        </div>
    )
}

export default Total;