import Menu from "./Menu";

export default function Header() {
    return (
        <>
            <header id="header">
                <div id="headerTop" className="option">

                </div>
                <div id="headerMain">
                    <div id="headerMainLeft" className="headerMainChild">
                        <a href="#">
                            <img src="/Logo.png" alt="Holly Grove Church Logo" style={{width: '60px', height: '60px'}}/>
                        </a>
                    </div>
                    <div id="headerMainCenter" className="headerMainChild">

                    </div>
                    <div id="headerMainRight" className="headerMainChild">
                        <Menu />
                    </div>
                </div>
                <div id="headerBottom" className="option">

                </div>
            </header>
        </>
    )
}