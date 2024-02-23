import Image from "next/image";
import Link from "next/link";
import classes from "./main-footer.module.css"
import NavLink from "./nav-link";
import NewslatterSignUp from "../subscibe/subscribe";

export default function MainFooter(){
    return (
        <footer className={classes.footer}>
            <div className={classes.compatator}>
                <Link href=""><Image src="" alt="compatators" priority/></Link>
                <Link href=""><Image src="" alt="compatators" priority/></Link>
                <Link href=""><Image src="" alt="compatators" priority/></Link>
                <Link href=""><Image src="" alt="compatators" priority/></Link>
            </div>
            <nav>
                <NavLink href="">
                    Departments
                </NavLink>
            </nav>
            <div className={classes.connect}>
                <h2>Subscribe our Email</h2>
                <NewslatterSignUp />
            </div>
        </footer>
    )
}