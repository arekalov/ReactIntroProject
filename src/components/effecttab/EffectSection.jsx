import Button from "../core/Button/Button.jsx";
import {Modal} from "../core/Modal/Modal.jsx";
import {useEffect, useState} from "react";

export function EffectSection() {
    const [isModalShown, setModalShown] = useState(false)
    const [loading, setLoading] = useState(false)
    const [users, setUsers] = useState([])

    useEffect(() => {
        async function getUsers() {
            setLoading(true)
            const response = await fetch("https://jsonplaceholder.typicode.com/users")
            const users = await response.json()
            setUsers(users)
            setLoading(false)
        }

        getUsers()
    }, [])

    return (
        <section>
            <h3>Эффекты</h3>
            <Button onClick={() => setModalShown(true)}>Открыть информацию</Button>
            <Modal open={isModalShown}>
                <h3>Привет из модальнога окна</h3>
                <p>Привет, это модальное окно с рандомным содержимым. Привет, это модальное окно с рандомным содержимым.
                    Привет, это модальное окно с рандомным содержимым.
                    Привет, это модальное окно с рандомным содержимым.
                    Привет, это модальное окно с рандомным содержимым.
                    Привет, это модальное окно с рандомным содержимым.</p>
                <Button onClick={() => setModalShown(false)}>Закрыть</Button>
            </Modal>
            <h3 style={{marginTop: "1rem"}}>Пользователи</h3>
            {loading && <p>Идет загрузка</p>}
            {!loading && <ul>
                {users.map(user => <li key={user.id}>
                    {user.name}
                </li>)}
            </ul>}
        </section>
    )
}