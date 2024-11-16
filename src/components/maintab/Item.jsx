export default function Item({title, description}) {
    return (
        <li>
            <p>
                <strong>{title}</strong> {description}
            </p>
        </li>
    )
}