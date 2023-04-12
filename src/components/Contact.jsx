import { LinkedinSvg } from "../svgs/LinkedinSvg"
import { BehanceSvg } from "../svgs/BehanceSvg"
import { GithubSvg } from "../svgs/GithubSvg"
import { WhatsappSvg } from "../svgs/WhatsappSvg"
import { MailSvg } from "../svgs/MailSvg"

export const Contact = () => {
    return (
        <section id="contact" className="contact">
            <ul className="icon-list">
                <a className="contact-icon" rel="noreferrer" target="_blank" href="https://github.com/refarefa1"><GithubSvg /></a>
                <a className="contact-icon" rel="noreferrer" target="_blank" href="https://www.behance.net/refaelavramov"><BehanceSvg /></a>
                <a className="contact-icon" rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/refael-abramov"><LinkedinSvg /></a>
                <a className="contact-icon" rel="noreferrer" target="_blank" href="mailto:refaelavramov@gmail.com"><MailSvg /></a>
                <a className="contact-icon" rel="noreferrer" target="_blank" href="whatsapp://send?phone=0545468915"><WhatsappSvg /></a>
            </ul>
        </section>
    )
}