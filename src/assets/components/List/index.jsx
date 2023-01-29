const MyList = ({ listTransactions }) => {
    return (
        listTransactions.map((transaction, index) => <Card transaction={transaction} key={index} />)
    )
}

export default MyList;