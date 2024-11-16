import Button from "../core/Button/Button.jsx";
import {useState} from "react";
import StateVsRefSection from "./StateVsRefSection.jsx";
export function FeedbackSection() {
    const [name, setName] = useState("")
    const [reason, setReason] = useState("help")
    const [hasError, setHasError] = useState(false)

    function handleNameChange(event) {
        setName(event.target.value)
        setHasError(event.target.value.trim().length === 0)
    }

    function handleReasonChange(event) {
        setReason(event.target.value)
    }

    return (
        <section>
            <h3>Обратная связь</h3>
            <form>
                <label htmlFor={"name"}>Ваше имя</label>
                <input style={{border: hasError ? "1px solid red" : null}} className={"control"} type={"text"}
                       value={name} onChange={handleNameChange}/>
            </form>

            <select id={"reason"} className={"control"} value={reason} onChange={handleReasonChange}>
                <option value={"error"}>Ошибка</option>
                <option value={"help"}>Нужна помощь</option>
                <option value={"suggest"}>Предложение</option>
            </select>
            <StateVsRefSection/>
            <Button disabled={hasError}>Отправить</Button>
        </section>
    )
}