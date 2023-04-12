import { CvSvg } from "../svgs/CvSvg"
import { SomedaySvg } from "../svgs/SomedaySvg"
import { ShukaSvg } from "../svgs/ShukaSvg"
import { YoutubeSvg } from "../svgs/YoutubeSvg"
import { IzharImg } from "../svgs/IzharImg"
import { ScooperSvg } from "../svgs/ScooperSvg"
import { NintendoSvg } from "../svgs/NintendoSvg"
import { RamiSvg } from "../svgs/RamiSvg"
import { useEffect, useRef } from "react"

import IzharBg from "../assets/imgs/izhar-bg.png"
import SomedayBg from "../assets/imgs/someday-bg.png"
import ShukaBg from "../assets/imgs/shuka-bg.png"
import ScooperBg from "../assets/imgs/scooper-bg.png"
import YoutubeBg from "../assets/imgs/youtube-bg.png"
import RamiBg from "../assets/imgs/rami-bg.png"
import CvBg from "../assets/imgs/cv-bg.png"
import NintendoBg from "../assets/imgs/nintendo-bg.png"
import { IntersectionObserverHook } from "../hooks/IntersectionObserverHook"
import { Link } from "react-router-dom"

export const Projects = () => {

    const projects = [
        {
            _id: 'p101',
            name: 'someday',
            desc: `a monday's clone`,
            type: 'fullstack',
            url: 'https://someday.onrender.com',
            txt: 'someday.onrender.com',
            svg: <SomedaySvg />,
            bgColor: '#ffffff',
            img: SomedayBg
        },
        {
            _id: 'p102',
            name: 'photoizhar',
            desc: 'e-commerce for filming',
            type: 'graphic-design',
            url: 'https://www.behance.net/gallery/146656535/E-Commerce',
            txt: 'behance.net/photoizhar',
            svg: <IzharImg />,
            bgColor: '#daac30',
            img: IzharBg
        },
        {
            _id: 'p103',
            name: 'shuka',
            desc: 'e-commerce for fruits & veggies',
            type: 'fullstack',
            url: 'http://shuka.onrender.com/',
            txt: 'shuka.onrender.com',
            svg: <ShukaSvg />,
            bgColor: '#213519',
            img: ShukaBg

        },
        {
            _id: 'p104',
            name: 'scooper',
            desc: 'branding work for gelato',
            type: 'graphic-design',
            url: 'https://www.behance.net/gallery/110320239/Digital-Brand-book',
            txt: 'behance.net/scooper',
            svg: <ScooperSvg />,
            bgColor: '#252929',
            img: ScooperBg

        },
        {
            _id: 'p105',
            name: 'youtube',
            desc: `a youtube's clone`,
            type: 'fullstack',
            url: 'https://refarefa1.github.io/youtube/',
            txt: 'refarefa1.github.io/youtube',
            svg: <YoutubeSvg />,
            bgColor: '#000000',
            img: YoutubeBg
        },
        {
            _id: 'p106',
            name: 'rami-shef',
            desc: 'app prototype - food concept',
            type: 'graphic-design',
            url: 'https://www.figma.com/proto/AT5GUr84uxCuHnhwCRX3qG/Rami-shef?node-id=2%3A2&starting-point-node-id=2%3A2',
            txt: 'figma.com/rami-shef',
            svg: <RamiSvg />,
            bgColor: '#CBDDF5',
            img: RamiBg
        },
        {
            _id: 'p107',
            name: 'cvgen',
            desc: 'resume builder',
            type: 'fullstack',
            url: 'https://cvgen-refarefa1.vercel.app/',
            txt: 'cvgen-refarefa1.vercel.app',
            svg: <CvSvg />,
            bgColor: '#0e7cd3',
            img: CvBg
        },
        {
            _id: 'p108',
            name: 'nintendo',
            desc: 'landing page',
            type: 'graphic-design',
            url: 'https://www.behance.net/gallery/105423759/Landing-Page',
            txt: 'behance.net/nintendo',
            svg: <NintendoSvg />,
            bgColor: '#e70012',
            img: NintendoBg
        },

    ]

    const elProjects = useRef(null)
    IntersectionObserverHook(elProjects)

    useEffect(() => {
        const cards = Array.from(document.querySelectorAll('.card'))
        const cursor = document.querySelector('.cursor')
        cards.forEach(card => {
            card.addEventListener('mousemove', function (event) {
                rotateImage3D(card, event);
                cursor.classList.add('hover');

            });
            card.addEventListener('mouseout', function () {
                card.style.transform = 'perspective(500px) rotateX(0) rotateY(0)'
                cursor.classList.remove('hover');
            });
        })
    }, [])

    const rotateImage3D = (element, event) => {
        const rect = element.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const angleX = (event.clientY - centerY) / rect.height * 30; // Maximum rotation of 30 degrees
        const angleY = (event.clientX - centerX) / rect.width * 30; // Maximum rotation of 30 degrees
        // element.style.transition = "transform 0.5s ease";
        element.style.transform = `perspective(500px) rotateX(${angleX}deg) rotateY(${angleY}deg)`;
    }

    const formatName = (id) => {
        switch (id) {
            case 'p101': return 'someday'
            case 'p102': return 'photoizhar'
            case 'p103': return 'shuka'
            case 'p104': return 'scooper'
            case 'p105': return 'youtube'
            case 'p106': return 'rami-shef'
            case 'p107': return 'cvgen'
            case 'p108': return 'nintendo'
            default: return id
        }
    }


    return (
        <section id="projects" className="projects" ref={elProjects}>
            <div className="projects__wrapper">
                <div className="projects__header">
                    <h1><span style={{ color: '#66d9ed' }}>my</span> work</h1>
                </div>
                <ul className="project-list">
                    {projects.map(project =>
                        <li key={project._id} className="card">
                            <Link to={`project/${formatName(project._id)}`}>
                                <div className="img">
                                    <img src={project.img} alt="" />
                                </div>
                                <div className="info">
                                    <h1>{project.name}</h1>
                                    <p>{project.desc}</p>
                                    <div>{project.type}</div>
                                </div>
                                <div className="black" />
                            </Link>
                        </li>
                    )}
                </ul>
            </div >
        </section >
    )
}