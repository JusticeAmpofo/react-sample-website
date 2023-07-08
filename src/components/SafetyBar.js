import { useState, useEffect } from 'react';
import '../styles/SafetyBar.css';

function SafetyBar({ hideOffset, targetId }) {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const scrollHandler = () => {
            const targetSection = document.getElementById(targetId);

            const rect = targetSection.getBoundingClientRect();
            const topDistance = rect.top;
            const viewportHeight =
                window.innerHeight || document.documentElement.clientHeight;

            const distanceToBottom = viewportHeight - topDistance;

            setIsVisible(distanceToBottom < hideOffset);
        };

        window.addEventListener('scroll', scrollHandler);
    }, [hideOffset, targetId]);

    if (!isVisible) return null;

    return (
        <div className='safety-bar container website-border'>
            <div className='safety-bar__content'>
                <a href='#isi' className='btn safety__btn-isi'>
                    +
                </a>
                <h2 className='h1 mb5'>IMPORTANT SAFETY INFORMATION</h2>
                <p className='mb5'>
                    3 visible lines of copy should always be visible
                </p>
                <p className='mb5'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Cras suscipit, metus ac hendrerit vestibulum, turpis tortor
                    tempus lacus, nec mollis magna lorem ac nisi. Vivamus quis
                    enim lorem.
                </p>
            </div>
        </div>
    );
}
export default SafetyBar;
