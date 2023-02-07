const Card = ({ transaction, removeTransaction }) => {

    return (
        <div className="divUser">
            <div className="divTitleAndValue">
                <h1 className="title">{transaction.description}</h1>
                <p className="value">{transaction.value}</p>
            </div>
            <div className="divType">
                <p className="type">{transaction.type}</p>
            </div>
            <button onClick={() => removeTransaction(transaction.id)}>Remover</button>
        </div>
    )
}

export default Card;