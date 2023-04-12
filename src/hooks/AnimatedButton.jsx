import { useEffect, useRef } from "react"

export const AnimatedButton = ({ text, className, cb }) => {

    const button = useRef(null)
    const span = useRef(null)

    useEffect(() => {
        addEventListeners()
    }, [])

    const addEventListeners = () => {
        ["mouseenter", "mouseout"].forEach(evt => {
            button.current.addEventListener(evt, e => {
                let parentOffset = button.current.getBoundingClientRect()
                const relX = e.clientX - parentOffset.left
                const relY = e.clientY - parentOffset.top
                span.current.style.top = relY + "px"
                span.current.style.left = relX + "px"
            })
        })
    }

    return (
        <button onClick={cb} className={className} ref={button}>
            {text}
            <span ref={span} />
        </button>
    )



}