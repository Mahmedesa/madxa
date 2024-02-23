import Image from "next/image";
import Link from "next/link";
import logoImg from '@/assets/logo.png'
import NavLink from "./nav-link";
import classes from "./main-header.module.css"


export default function MainHeader(){
    return(
        <>
            <header className={classes.header}>
                <Link className={classes.logo} href="/" >
                    <Image 
                     src={logoImg}
                     alt="Madxa logo"
                     priority/>
                     Madxa Medical Care
                </Link>
                <nav className={classes.nav}>
                    <ul>
                        <li>
                            <NavLink href="/">
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink href="/blogs">
                                Blogs
                            </NavLink>
                        </li>
                        <li>
                            <NavLink href="/services">
                                Service
                            </NavLink>
                        </li>
                        <li>
                            <NavLink href="/about">
                                About Us
                            </NavLink>
                        </li>
                        <li>
                            <NavLink href="/asks">
                                Ask Madxa
                            </NavLink>
                        </li> 
                    </ul>
                </nav>
                <p className={classes.cta}>
                    <a href="/requests">
                        Request Services 
                    </a>
                </p>
            </header>
        </>
    )
}