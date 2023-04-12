import { useEffect } from "react"
import { AnimatedButton } from "../hooks/AnimatedButton"
import { TextAnimation } from "../hooks/TextAnimation"

export const AppHeader = () => {

    useEffect(() => {
        const letters = Array.from(document.querySelectorAll('.letter'))
        letters.forEach(letter => {
            letter.addEventListener("mousemove", () => {
                letter.classList.add('animate')
                setTimeout(() => { letter.classList.remove('animate') }, 1000)
            })
        })

    }, [])


    const scroll = () => {
        document.querySelector('.about').scrollIntoView({ behavior: 'smooth' })
    }

    const words = [
        'websites',
        'apps',
        'ideas',
        'UX UI'
    ]


    return (
        <header className="main-header">
            <h1 className="main-header__title--start">
                <span className="letter">H</span>
                <span className="letter">i</span>
                <span className="letter">,</span>
            </h1>
            <h1 className="main-header__title--end">
                <span className="letter">I</span>
                <span className="letter">'</span>
                <span className="letter">m</span>
                <span className="letter">&nbsp;</span>
                <span className="letter colored">R</span>
                <span className="letter colored">e</span>
                <span className="letter colored">f</span>
                <span className="letter colored">a</span>
                <span className="letter colored">e</span>
                <span className="letter colored">l</span>
            </h1>
            <h2 className="main-header__subtitle">
                <span className="letter">I</span>
                <span className="letter">&nbsp;</span>
                <span className="letter">d</span>
                <span className="letter">e</span>
                <span className="letter">s</span>
                <span className="letter">i</span>
                <span className="letter">g</span>
                <span className="letter">n</span>
                <span className="letter">&nbsp;</span>
                <span className="letter">a</span>
                <span className="letter">n</span>
                <span className="letter">d</span>
                <span className="letter">&nbsp;</span>
                <span className="letter">d</span>
                <span className="letter">e</span>
                <span className="letter">v</span>
                <span className="letter">e</span>
                <span className="letter">l</span>
                <span className="letter">o</span>
                <span className="letter">p</span>
                <span className="letter">&nbsp;</span>
                <br />
                    <span className="animated"><TextAnimation words={words} /></span>
            </h2>

            <AnimatedButton cb={scroll} text="explore" className="main-header__cta" />
        </header>
    )
}