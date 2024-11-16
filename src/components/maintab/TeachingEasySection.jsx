import Item from "./Item.jsx";
import {ways} from "../../data.js";

export function TeachingEasySection() {
    return (
        <section>
            <h3>{"Наш подход к обучению"}</h3>
            <ul>
                <Item title={ways[0].title} description={ways[0].description}/>
                <Item {...ways[1]}/>
                <Item {...ways[2]}/>
                <Item {...ways[3]}/>
            </ul>
        </section>
    )
}