import { useState } from "react";
import Card from "../Card";
import MyList from "../List";

export function FormCard({addTransactionsToList}){

    const [formData, setFormData] = useState({
        description: "",
        value: "",
        type: "entrada"
    })

    function handleSubmit(event) {
        event.preventDefault()
        console.log('Cliquei')
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <fieldset className="inputDescription">
                <label>
                    Descrição
                    <input type="text" />
                </label>
                <p>Ex.: Compra de roupas</p>
            </fieldset>
            <fieldset className="valueAndSelect">
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
            </fieldset>
            <button type="submit">Inserir Valor</button>
        </form>
    )
}

export default FormCard;