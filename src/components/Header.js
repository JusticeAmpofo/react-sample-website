import { useState } from 'react';
import { Link } from 'react-router-dom';
import navLinks from '../content/navLinks';
import '../styles/Header.css';

function Header() {
    const [expandNav, setExpandNav] = useState(false);

    return (
        <header className='header website-border'>
            <div className='container'>
                <div className='headline-block mb8 mb0-sm'>
                    <h1 className='h1'>My Header</h1>

                    <button
                        onClick={() => setExpandNav((expandNav) => !expandNav)}
                        className={`hamburger mobile-only-block ${
                            expandNav ? 'hamburger--expand' : ''
                        }`}
                    >
                        <span className='hamburger__top'></span>
                        <span className='hamburger__middle'></span>
                        <span className='hamburger__bottom'></span>
                    </button>
                </div>

                <div className='navigation-block navigation-block--desktop desktop-only-block'>
                    <p className='mr1'>Main nav links:</p>
                    <nav>
                        <ul>
                            {navLinks.map((navLink, index) => {
                                return (
                                    <li
                                        key={index}
                                        className='navigation-block__list mr1'
                                    >
                                        {navLink.isInternal ? (
                                            <Link
                                                to={navLink.href}
                                                className='navigation-block__link'
                                            >
                                                {navLink.name}
                                            </Link>
                                        ) : (
                                            <a
                                                className='navigation-block__link'
                                                href={navLink.href}
                                                target='_blank'
                                                rel='noreferrer'
                                            >
                                                {navLink.name}
                                            </a>
                                        )}
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>
                </div>

                <div
                    className={`mt8 navigation-block navigation-block--mobile ${
                        expandNav ? 'mobile-only-block' : ''
                    }`}
                >
                    <p className='mb2'>Main nav links:</p>
                    <nav>
                        <ul>
                            {navLinks.map((navLink, index) => {
                                return (
                                    <li
                                        key={index}
                                        className='navigation-block__list-mobile mb3'
                                    >
                                        {navLink.isInternal ? (
                                            <Link
                                                to={navLink.href}
                                                className='navigation-block__link navigation-block__link--mobile'
                                            >
                                                {navLink.name}
                                            </Link>
                                        ) : (
                                            <a
                                                className='navigation-block__link navigation-block__link--mobile'
                                                href={navLink.href}
                                                target='_blank'
                                                rel='noreferrer'
                                            >
                                                {navLink.name}
                                            </a>
                                        )}
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}
export default Header;
