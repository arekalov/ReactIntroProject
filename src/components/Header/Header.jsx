import logo from '/logo-name.svg'
import {useState} from "react";
import "./Header.css"
import { styled } from "styled-components"

const HeaderContainer = styled.header`
    height: 50px;
    display: flex;
    padding: 0 2rem;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ccc;
    background: #fafafa;
`

export default function Header() {
    const [nowTime, setNow] = useState(new Date())
    setInterval(() => setNow(new Date()), 1000)
    return (
        <HeaderContainer>
            <img src={logo} alt={"logo"}/>
            <h3>Rekalov Artem Olegovich</h3>
            <span>Current time: {nowTime.toLocaleTimeString()}</span>
        </HeaderContainer>
    )
}