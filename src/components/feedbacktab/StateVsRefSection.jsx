import {useRef, useState} from "react";

export default function StateVsRefSection() {
    const input = useRef()
    const [isShown, setIsShown] = useState(false)

    function handleKeyDown(event) {
        if (event.key === "Enter") {
            setIsShown(true)
        }
    }

    return (
        <section>
            <h3>Input value: {isShown && input.current.value}</h3>
            <input type={"text"} className={"control"} ref={input} onKeyDown={handleKeyDown}/>
        </section>
    )
}