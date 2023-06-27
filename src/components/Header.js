function Header() {
    return (
        <header className="header website" class="header website-border">
            <div className="container">
                <h1 className="h1 mb8">My Header</h1>

                <div className="navigation-block">
                    <p>Main nav links: </p>
                    <nav>
                        <ul>
                            <li><a className="navigation-block__link" href="https://www.google.com" target="_blank" rel="noreferrer">google.com</a></li>
                            <li><a className="navigation-block__link" href="https://www.klick.com" target="_blank" rel="noreferrer">klick.com</a></li>
                            <li><a className="navigation-block__link" href="https://unity.com/" target="_blank" rel="noreferrer">unity.com</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}
export default Header