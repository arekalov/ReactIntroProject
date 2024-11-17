import Button from "./core/Button/Button.jsx";

export default function IntroSection({ selected, onChange }) {
    console.log(selected);
    return (
        <section style={{marginBottom: "1rem", textAlign: "center"}}>
            <h1 className={"centered"}>Rekalov's university</h1>
            <h3 className={"centered"} style={{ color: "#666" }}>
                Устроитесь на работу или вернем деньги, после прохождения полной программы.
            </h3>
            <Button isSelected={"main" === selected} onClick={() => onChange("main")}>
                Главная
            </Button>
            <Button isSelected={"feedback" === selected} onClick={() => onChange("feedback")}>
                Обратная связь
            </Button>
            <Button isSelected={"effects" === selected} onClick={() => onChange("effects")}>
                Эффекты
            </Button>
        </section>
    );
}
