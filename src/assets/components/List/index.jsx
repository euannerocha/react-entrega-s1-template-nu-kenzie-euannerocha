import Card from "../Card";

const MyList = ({ listTransactions, removeTransaction }) => {
    return (
        listTransactions.map((transaction, index) => <Card transaction={transaction} key={index} removeTransaction={removeTransaction} />)
    )
}

export default MyList;