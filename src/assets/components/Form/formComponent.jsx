const MyForm = ({ listTransactions, setListTransactions }) => {
    return (
        <div className="form">
            <div className="inputDescription">
                <label>
                    Descrição
                    <input type="text" />
                </label>
                <p>Ex.: Compra de roupas</p>
            </div>
            <div className="valueAndSelect">
                <div className="inputValue">
                    <label>
                        Valor
                        <input type="number" />
                    </label>
                </div>
                <div className="selectEntranceAndExit">
                    <label>
                        Tipo de valor
                        <select name="entranceAndExit" id="entranceAndExit">
                            <option value="entrance">Entrada</option>
                            <option value="exit">Saída</option>
                        </select>
                    </label>
                </div>
            </div>
            <button type="submit">Inserir Valor</button>
        </div>
    )
}

export default MyForm;