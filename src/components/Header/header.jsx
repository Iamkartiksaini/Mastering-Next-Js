
import Link from "next/link";
import Image from "next/image";
import "./header.scss"

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
    ];

    return (
        <header className="header">
            <Link href={"/"} className='left-section'>
                <Image src="/next.svg" height={40} width={80} alt="/logo.svg" />
            </Link>
            <div className="mid-section">
                {navItems.map((item, i) => {
                    return <Link key={i} href={item.link}>{item.name}</Link>
                })}
            </div>
            <div className="menu">
                <input style={{ display: "none" }} type="checkbox" name="menu" id="menu" />
                <label id="btn" type="button" htmlFor="menu">menu</label>
                <label htmlFor="menu" className="close-layer"></label>
                <div className="pop-up-menu">
                    <ul className="list">
                        <label htmlFor="menu" className="item">Close Menu</label>
                        {navItems.map((item, i) => {
                            return <Link className="item" key={i} href={item.link}>{item.name}</Link>
                        })}

                    </ul>
                </div>
            </div>
        </header >
    );
};

export default Header;