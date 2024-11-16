import Item from "./Item.jsx";
import {ways} from "../../data.js";

export default function TeachingSection() {
    return (
        <section>
            <h3>Также наши плюсы</h3>
            <ul>
                {ways.map(way => <Item key={way.title} {...way}/>)}
            </ul>
        </section>
    )
}