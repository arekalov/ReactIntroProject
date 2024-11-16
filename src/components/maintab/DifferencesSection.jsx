import Button from "../core/Button/Button.jsx";
import {differences} from "../../data.js";
import {useState} from "react";

export default function DifferencesSection() {
    const [content, setContent] = useState(differences["way"])

    function handleClick(buttonName) {
        setContent(differences[buttonName])
    }

    return (
        <section>
            <h3>Чем мы отличаемся от других</h3>
            <Button isSelected={content === differences.way} onClick={() => handleClick("way")}>
                Подход
            </Button>
            <Button isSelected={content === differences.easy} onClick={() => handleClick("easy")}>
                Доступность
            </Button>
            <Button isSelected={content === differences.program} onClick={() => handleClick("program")}>
                Концентрация
            </Button>
            <p>{content}</p>
        </section>
    )
}