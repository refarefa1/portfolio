import { useEffect, useState } from "react";

export const IntersectionObserverHook = (element) => {
    const [isIntersecting, setIsIntersecting] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setIsIntersecting(entry.isIntersecting);
        }, { rootMargin: "-100px" });
        observer.observe(element.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (isIntersecting) {
            element.current.classList.add('reveal')
        }
    }, [isIntersecting]);

}