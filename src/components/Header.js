function Header() {
    return (
        <header className="header website" class="header website-border">
            <div className="container">
                <h1 className="h1 mb8">My Header</h1>

                <div className="navigation-block navigation-block--desktop">
                    <p className="mr1">Main nav links:</p>
                    <nav>
                        <ul>
                            <li  className="navigation-block__list mr1"><a className="navigation-block__link" href="https://www.google.com" target="_blank" rel="noreferrer">google.com</a></li>
                            <li className="navigation-block__list mr1"><a className="navigation-block__link" href="https://www.klick.com" target="_blank" rel="noreferrer">klick.com</a></li>
                            <li className="navigation-block__list mr1"><a className="navigation-block__link navigation-block__link--last" href="https://unity.com/" target="_blank" rel="noreferrer">unity.com</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}
export default Header