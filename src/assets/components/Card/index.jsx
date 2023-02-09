import './card.css'
import imageTrash from "../../../images/ButtonTrash.png"


const Card = ({ transaction, removeTransaction }) => {

    return (
        <div className={transaction.type === "Entrada" ? "typeCardEntrance" : "typeCardExit"}>
            <div className="divTitleAndValueCard">
                <h1 className="titleCard">{transaction.description}</h1>
                <p className="valueCard">{`R$ ${transaction.value}`}</p>
            </div>
            <div className="divTypeCard">
                <p className="typeCard">{transaction.type}</p>
            </div>
            <button className='buttonCard' onClick={() => removeTransaction(transaction.id)}> <img src={imageTrash}/> </button>
        </div>
    )
}

export default Card;