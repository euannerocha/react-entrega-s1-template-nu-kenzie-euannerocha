const Card = ({ titleTransaction, valueTransaction, typeTransaction }) => {
    return (
        <div className="divUser">
            <div className="divTitleAndValue">
                <h1 className="title">{titleTransaction}</h1>
                <p className="value">{valueTransaction}</p>
            </div>
            <div className="divType">
                <p className="type">{typeTransaction}</p>
            </div>
        </div>
    )
}

export default Card;