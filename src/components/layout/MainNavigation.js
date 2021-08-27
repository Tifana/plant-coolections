// import classes from "./Navbar.module.css"
import { Link } from "react-router-dom"

import classes from './MainNavigation.module.css'

function MainNavigation() {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>Plant Coolections</div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home Page</Link>
                    </li>
                    <li>
                        <Link to="/Wishlist">Wishlists</Link>
                    </li>
                    <li>
                        <Link to="/MyPlants">MyPlants</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation