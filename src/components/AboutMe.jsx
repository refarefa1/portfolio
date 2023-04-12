import { AnimatedButton } from "../hooks/AnimatedButton"
import profileImg from "../assets/imgs/profile.jpg"
import { useRef } from "react"
import { IntersectionObserverHook } from "../hooks/IntersectionObserverHook"

export const AboutMe = () => {

    const elAbout = useRef(null)
    IntersectionObserverHook(elAbout)

    const scroll = () => {
        document.querySelector('.projects').scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <section id="about" className="about" ref={elAbout}>
            <div className="left">
                <h1 className="about__title">who am <span>i</span>?</h1>
                <div className="about__content">
                    <p>I'm a fullstack developer and graphic designer</p>
                    <p>with a lifelong passion for technology.</p>
                    <p>I love bringing ideas to life through code</p>
                    <p>and creating beautiful designs.</p>
                    <p>Let's make something amazing together.</p>
                </div>
                <AnimatedButton cb={scroll} text="my projects" className="about__cta" />
            </div>
            <div className="right" >
                <img src={profileImg} alt="" />
                <div className="square" />
            </div>
        </section>
    )
}
