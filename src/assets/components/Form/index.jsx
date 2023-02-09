import { useState } from "react";
import './form.css'

export function FormCard({ addTransaction }) {

    const [formData, setFormData] = useState({
        description: "",
        value: "",
        type: "Entrada"
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
                    <input placeholder="Digite aqui sua descrição" type="text" onChange={(event) => setFormData({ ...formData, description: event.target.value })} />
                </label>
                <p>Ex.: Compra de roupas</p>
            </fieldset>
            <fieldset className="valueAndSelect">
                <div className="inputValue">
                    <label>
                        Valor
                        <input placeholder="R$" type="number" onChange={(event) => setFormData({ ...formData, value: event.target.value })} />
                    </label>
                </div>
                <div className="selectEntranceAndExit">
                    <label>
                        Tipo de valor
                        <select name="entranceAndExit" id="entranceAndExit" onChange={(event) => setFormData({ ...formData, type: event.target.value })} >
                            <option value="Entrada">Entrada</option>
                            <option value="Saída">Saída</option>
                        </select>
                    </label>
                </div>
            </fieldset>
            <button type="submit">Inserir Valor</button>
        </form>
    )
}

export default FormCard;