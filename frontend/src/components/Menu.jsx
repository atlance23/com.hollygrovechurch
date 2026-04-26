import {Link} from "react-router-dom";

export default function Menu() {
    return (
        <>
            <nav id="primaryMenu">
                <ul style={{listStyle: 'none'}}>
                    <li>
                        <Link to="/" style={{textDecoration: 'none', padding: "5px", color: 'var(--primary-text-color)'}} href="#">Home</Link>
                        <Link to="/dashboard" style={{textDecoration: 'none', padding: "5px", color: 'var(--primary-text-color)'}} href="#">Dashboard</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}