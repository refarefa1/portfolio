import { useEffect, useRef, useState } from "react"

export const TextAnimation = ({ words }) => {


    useEffect(() => {
        animate()
    }, [])


    const [word, setWord] = useState(null)

    const idx = useRef(0)
    const letterIdx = useRef(0)
    const line = useRef()

    const intervalId = useRef(null)
    const lineIntervalId = useRef(null)

    const animate = () => {
        intervalId.current = setInterval(() => {
            const currWord = words[idx.current]
            const letter = currWord[letterIdx.current]
            if (!letter) {
                animateLine()
                return
            }
            setWord(prevWord => {
                if (!prevWord) return letter
                return prevWord += letter
            })
            letterIdx.current += 1
        }, 100)
    }

    const animateLine = () => {
        clearInterval(intervalId.current)
        lineIntervalId.current = setInterval(() => {
            const style = line.current.style.display
            line.current.style.display = (style === 'none') ? 'inline' : 'none'
        }, 300);
        setTimeout(() => {
            clearInterval(lineIntervalId.current)
            removeWord()
        }, 1300)
    }

    const removeWord = () => {
        intervalId.current = setInterval(() => {
            setWord(prevWord => {
                const word = prevWord.substr(0, prevWord.length - 1)
                if (!word) {
                    clearInterval(intervalId.current)
                    const currIdx = idx.current
                    if (currIdx + 1 === words.length) idx.current = 0
                    else idx.current += 1
                    letterIdx.current = 0
                    animate()
                }
                return word
            })
        }, 100);
    }


    return (
        <>
            <span>{word}</span><span ref={line}>|</span>
        </>
    )
}