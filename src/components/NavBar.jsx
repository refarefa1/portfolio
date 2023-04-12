import { useRef } from "react"

export const NavBar = () => {

    const nav = useRef(null)

    const onScrollTo = (dest) => {
        let el = ''
        if (dest === 'home') el = document.querySelector('body')
        if (dest === 'about') el = document.querySelector('.about')
        if (dest === 'projects') el = document.querySelector('.projects')
        if (dest === 'contact') el = document.querySelector('.contact')
        el.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <nav className="main-nav" ref={nav}>
            <button onClick={() => onScrollTo('home')}>
                <span>//</span>
                home
            </button>
            <button onClick={() => onScrollTo('about')}>
                <span>//</span>
                about
            </button>
            <button onClick={() => onScrollTo('projects')}>
                <span>//</span>
                work
            </button>
            <button onClick={() => onScrollTo('contact')}>
                <span>//</span>
                contact
            </button>
        </nav>
    )
}