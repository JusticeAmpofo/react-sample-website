function Header() {
    return (
        <header className="header website" class="header website-border">
            <div className="container">
                <div className="headline-block mb8">
                    <h1 className="h1">My Header</h1>

                    <button class="hamburger mobile-only-block">
                        <span class="hamburger__top"></span>
                        <span class="hamburger__middle"></span>
                        <span class="hamburger__bottom"></span>
                    </button>
                </div>

                <div className="navigation-block navigation-block--desktop desktop-only-block">
                    <p className="mr1">Main nav links:</p>
                    <nav>
                        <ul>
                            <li  className="navigation-block__list mr1"><a className="navigation-block__link" href="https://www.google.com" target="_blank" rel="noreferrer">google.com</a></li>
                            <li className="navigation-block__list mr1"><a className="navigation-block__link" href="https://www.klick.com" target="_blank" rel="noreferrer">klick.com</a></li>
                            <li className="navigation-block__list mr1"><a className="navigation-block__link navigation-block__link--last" href="https://unity.com/" target="_blank" rel="noreferrer">unity.com</a></li>
                        </ul>
                    </nav>
                </div>

                <div className="navigation-block navigation-block--mobile mobile-only-block">
                    <p className="mb2">Main nav links:</p>
                    <nav>
                        <ul>
                            <li  className="navigation-block__list-mobile mb3"><a className="navigation-block__link navigation-block__link--mobile" href="https://www.google.com" target="_blank" rel="noreferrer">google.com</a></li>
                            <li className="navigation-block__list-mobile mb3"><a className="navigation-block__link navigation-block__link--mobile" href="https://www.klick.com" target="_blank" rel="noreferrer">klick.com</a></li>
                            <li className="navigation-block__list-mobile mb3"><a className="navigation-block__link navigation-block__link--mobile" href="https://unity.com/" target="_blank" rel="noreferrer">unity.com</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}
export default Header