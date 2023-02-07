import { useState } from "react";
import Card from "../Card";
import MyList from "../List";

export function FormCard({ addTransaction }) {

    const [formData, setFormData] = useState({
        description: "",
        value: "",
        type: "entrada"
    })

    const submit = (event) => {
        event.preventDefault();
        addTransaction(formData);
      }

    return (
        <form className="form" onSubmit={submit}>
            <fieldset className="inputDescription">
                <label>
                    Descrição
                    <input type="text" onChange={(event) => setFormData({ ...formData, description: event.target.value })} />
                </label>
                <p>Ex.: Compra de roupas</p>
            </fieldset>
            <fieldset className="valueAndSelect">
                <div className="inputValue">
                    <label>
                        Valor
                        <input type="number" onChange={(event) => setFormData({ ...formData, value: event.target.value })} />
                    </label>
                </div>
                <div className="selectEntranceAndExit">
                    <label>
                        Tipo de valor
                        <select name="entranceAndExit" id="entranceAndExit" onChange={(event) => setFormData({ ...formData, type: event.target.value })} >
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