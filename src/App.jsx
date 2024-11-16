import Header from "./components/Header/Header.jsx";
import TeachingSection from "./components/maintab/TeachingSection.jsx";
import DifferencesSection from "./components/maintab/DifferencesSection.jsx";
import {TeachingEasySection} from "./components/maintab/TeachingEasySection.jsx";
import IntroSection from "./components/IntroSection.jsx";
import {useState} from "react";
import {FeedbackSection} from "./components/feedbacktab/FeedbackSection.jsx";

export default function App() {
    const [tab, setTab] = useState("main")
    function onchange(tab) {
        setTab(tab)
    }
    return (
        <>
            <Header/>
            <main>
                <IntroSection selected={tab} onChange={onchange} />
                {tab === "main" && (
                    <>
                        <TeachingEasySection/>
                        <DifferencesSection/>
                        <TeachingSection/>
                    </>
                )
                }
                {tab === "feedback" && (
                    <>
                        <FeedbackSection/>
                    </>
                )
                }

            </main>
        </>
    )
}

