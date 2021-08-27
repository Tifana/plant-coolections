import classes from "./Layout.module.css"
import Navbar from "./Navbar.js"

function Layout(){
    return (
        <div>
            <Navbar />
            <main className={classes.main}></main>
        </div>
    )
}

export default Layout