import { AboutMe } from "../components/AboutMe";
import { AppHeader } from "../components/AppHeader";
import { Projects } from "../components/Projects";
import { NavBar } from "../components/NavBar";
import { Animation } from "../components/Animation";
import { Cursor } from "../components/Cursor";
import { Contact } from "../components/Contact";


export const HomePage = () => {
    return (
        <main className="main-app">
            <Cursor />
            <NavBar />
            <AppHeader />
            <AboutMe />
            <Projects />
            <Contact />
            <Animation />
        </main>
    )
}