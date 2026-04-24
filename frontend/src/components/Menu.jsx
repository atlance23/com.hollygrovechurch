import {Link} from "react-router-dom";

export default function Menu() {
    return (
        <>
            <nav id="primaryMenu">
                <ul style={{listStyle: 'none'}}>
                    <li>
                        <Link to="/" style={{textDecoration: 'none', color: 'var(--primary-text-color)'}} href="#">Home</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}