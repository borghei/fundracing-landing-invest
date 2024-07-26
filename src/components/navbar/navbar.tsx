import './navbar.scss';
import { FC, useEffect, useRef, useState } from "react";
import logo from "assets/images/logo.png";
import { NavLink } from "react-router-dom";
import { ReactComponent as DownIcon } from 'assets/icons/down.svg';
import { ReactComponent as MenuIcon } from 'assets/icons/menu.svg';
import { ReactComponent as CloseIcon } from 'assets/icons/close.svg';
import { Button } from "../button/button";
import useOnBlur from "../../core/utilities/useOnBlur";
import { Drawer } from "antd";

interface Props {}

export const Navbar: FC<Props> = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [isDrawerOpen, setDrawerOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useOnBlur(dropdownRef, () => setDropdownOpen(false));

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 0;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);
    const toggleDrawer = () => setDrawerOpen(!isDrawerOpen);

    return (
        <>
            <header className={`fund-racing-navbar ${scrolled ? "scrolled" : ""}`}>
                <img src={logo} alt="Logo" className="logo"/>
                <nav>
                    <NavLink to="#" className={({isActive}) => isActive ? 'active' : undefined}>HOME</NavLink>
                    <NavLink to="#" className={({isActive}) => isActive ? 'active' : undefined}>Plans</NavLink>
                    <a onClick={toggleDropdown} className="dropdown-button">
                        Guidance <DownIcon/> {/* Down arrow icon */}
                    </a>
                    {isDropdownOpen && (
                        <div className="dropdown-menu" ref={dropdownRef}>
                            <ul>
                                <li><a href="#section1">Section 1</a></li>
                                <li><a href="#section2">Section 2</a></li>
                                <li><a href="#section3">Section 3</a></li>
                            </ul>
                        </div>
                    )}
                    <NavLink to="#">FAQ</NavLink>
                </nav>
                <div>
                    <NavLink to="#"><Button text="Login" variant="transparent"/></NavLink>
                    <NavLink to="#"><Button text="Sign Up" variant="primary"/></NavLink>
                </div>
            </header>
            <header className={`fund-racing-navbar-mobile ${scrolled ? "scrolled" : ""}`}>
                <img src={logo} alt="Logo" className="logo"/>
                <MenuIcon onClick={toggleDrawer}/>
                <Drawer
                    className={"fund-racing-drawer"}
                    placement="right"
                    closable={true}
                    closeIcon={<CloseIcon />}
                    onClose={toggleDrawer}
                    visible={isDrawerOpen}
                    drawerStyle={{ height: '80vh' }}
                    width={"80%"}
                >
                    <nav>
                    <NavLink to="#" className={({isActive}) => isActive ? 'active' : undefined}>HOME</NavLink>
                    <NavLink to="#" className={({isActive}) => isActive ? 'active' : undefined}>Plans</NavLink>
                    <NavLink to="#">Guidance</NavLink>
                    <NavLink to="#">FAQ</NavLink>
                    </nav>
                    <NavLink to="#"><Button text="Sign Up" variant="primary"/></NavLink>
                </Drawer>
            </header>
        </>
    );
};
