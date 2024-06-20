
import Link from "next/link";
import Image from "next/image";
import styles from "./header.module.scss"
import CustomRightDynamicDialog from "../Dialog/Right/Right_Dialog";

const Header = () => {

    const navItems = [
        {
            name: "Parallel Routing",
            link: "/Parallel",
        },
        {
            name: "Suspense",
            link: "/Suspense",
        }
        ,
        {
            name: "TanStack",
            link: "/TanStack"
        }
        , {
            name: "Mix Component",
            link: "/mix-component"
        }
        , {
            name: "Redux Toolkit",
            link: "/redux"
        }, {
            name: "PWA",
            link: "/pwa"
        },
        {
            name: "Todos",
            link: "Todos"
        }
        , {
            name: "Test",
            link: "/test"
        }
    ];

    const isLinksOverlapping = navItems.length > 3

    return (
        <header className={styles.header}>
            <Link href={"/"} className='left-section'>
                <Image src="/next.svg" height={40} width={80} alt="/logo.svg" />
            </Link>
            <div className={styles.midSection}>
                {navItems.slice(0, 4).map((item, i) => {
                    return <Link key={i} href={item.link}>{item.name}</Link>
                })}
                <label className="link" htmlFor="main-navbar-menu">More...</label>
            </div>

            <CustomRightDynamicDialog label='new button' unqiueKey={"nav-menu"} >
                <ul className={styles.list}>
                    {navItems.map((item, i) => {
                        return <Link className={styles.item} key={i} href={item.link}>{item.name}</Link>
                    })}
                </ul>
            </CustomRightDynamicDialog>

        </header >
    );
};

export default Header;