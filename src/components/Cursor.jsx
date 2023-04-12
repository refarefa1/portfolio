import { useEffect, useRef } from "react"

export const Cursor = () => {

    const cursor = useRef(null)
    const innerCursor = useRef(null)

    useEffect(() => {
        addEventListeners()
    }, [])

    const addEventListeners = () => {


        document.addEventListener('mousemove', function (e) {
            cursor.current.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
        })

        document.addEventListener('mousemove', function (e) {
            innerCursor.current.style.left = e.clientX + 'px';
            innerCursor.current.style.top = e.clientY + 'px';
        })

        document.addEventListener('mousedown', function () {
            cursor.current.classList.add('click');
            innerCursor.current.classList.add('cursorinnerhover')
        })

        document.addEventListener('mouseup', function () {
            cursor.current.classList.remove('click')
            innerCursor.current.classList.remove('cursorinnerhover')
        })

        const elBtns = document.querySelectorAll('button')
        elBtns.forEach(item => {
            item.addEventListener('mouseover', () => {
                cursor.current.classList.add('hover');
            });
            item.addEventListener('mouseleave', () => {
                cursor.current.classList.remove('hover');
            });
        })

        const elIcons = document.querySelectorAll('.contact-icon')
        elIcons.forEach(item => {
            item.addEventListener('mouseover', () => {
                cursor.current.classList.add('hover');
            });
            item.addEventListener('mouseleave', () => {
                cursor.current.classList.remove('hover');
            });
        })
    }

    return (
        <>
            <div ref={cursor} className="cursor"></div>
            <div ref={innerCursor} className="inner-cursor"></div>
        </>
    )
}