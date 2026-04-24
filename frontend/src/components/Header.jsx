export default function Header() {
    return (
        <>
            <header id="header">
                <div id="headerTop" className="option">

                </div>
                <div id="headerMain">
                    <div id="headerMainLeft" className="headerMainChild">

                    </div>
                    <div id="headerMainCenter" className="headerMainChild">

                    </div>
                    <div id="headerMainRight" className="headerMainChild">
                        <nav>
                            <ul style={{listStyle: 'none'}}>
                                <li>
                                    <a style={{textDecoration: 'none', color: 'var(--primary-text-color)'}} href="#">Home</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div id="headerBottom" className="option">

                </div>
            </header>
        </>
    )
}