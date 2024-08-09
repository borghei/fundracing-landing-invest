import './navbar.scss';
import {FC, useEffect, useState} from "react";
import logo from "assets/images/logo.png";
import {NavLink} from "react-router-dom";
import {ReactComponent as DownIcon} from 'assets/icons/down.svg';
import {ReactComponent as MenuIcon} from 'assets/icons/menu.svg';
import {ReactComponent as CloseIcon} from 'assets/icons/close.svg';
import {Button} from "../button/button";
import {Drawer, Dropdown, Menu} from "antd";

interface Props {
}

export const Navbar: FC<Props> = () => {
    const [scrolled, setScrolled] = useState<boolean>(false);
    const [isDropdownOpen, setDropdownOpen] = useState<boolean>(false);
    const [isLanguageOpen, setIsLanguageOpen] = useState<boolean>(false)
    const [isDrawerOpen, setDrawerOpen] = useState<boolean>(false);

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

    const toggleDrawer = () => setDrawerOpen(!isDrawerOpen);

    return (
        <>
            <header className={`fund-racing-navbar ${scrolled ? "scrolled" : ""}`}>
                <img src={logo} alt="Logo" className="logo"/>
                <nav>
                    <NavLink to="#" className={({isActive}) => isActive ? 'active' : undefined}>HOME</NavLink>
                    <NavLink to="#" className={({isActive}) => isActive ? 'active' : undefined}>Plans</NavLink>
                    <Dropdown
                        overlay={
                            <Menu>
                                <Menu.Item key="1"><a href="#section1">Section 1</a></Menu.Item>
                                <Menu.Item key="2"><a href="#section2">Section 2</a></Menu.Item>
                                <Menu.Item key="3"><a href="#section3">Section 3</a></Menu.Item>
                            </Menu>
                        }
                        trigger={['click']}
                        open={isDropdownOpen}
                        onOpenChange={setDropdownOpen}
                    >
                        <a className="dropdown-button" onClick={(e) => e.preventDefault()}>
                            Guidance <DownIcon/>
                        </a>
                    </Dropdown>

                    <NavLink to="#">FAQ</NavLink>
                </nav>
                <div>
                    <Dropdown
                        overlay={
                            <Menu>
                                <Menu.Item key="1"><a href="https://fa.invest.fundracing.co">Fa</a></Menu.Item>
                            </Menu>
                        }
                        trigger={['click']}
                        open={isLanguageOpen}
                        onOpenChange={setIsLanguageOpen}
                    >
                        <Button variant={"blurred"} text={"En"} className="dropdown-button" icon={<DownIcon/>}/>
                    </Dropdown>
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
                    closeIcon={<CloseIcon/>}
                    onClose={toggleDrawer}
                    visible={isDrawerOpen}
                    drawerStyle={{height: '80vh'}}
                    width={"80%"}
                >
                    <nav>
                        <NavLink to="#" className={({isActive}) => isActive ? 'active' : undefined}>HOME</NavLink>
                        <NavLink to="#" className={({isActive}) => isActive ? 'active' : undefined}>Plans</NavLink>
                        <NavLink to="#">Guidance</NavLink>
                        <NavLink to="#">FAQ</NavLink>
                        <Dropdown
                            overlay={
                                <Menu>
                                    <Menu.Item key="1"><a href="https://fa.invest.fundracing.co">Fa</a></Menu.Item>
                                </Menu>
                            }
                            trigger={['click']}
                            open={isLanguageOpen}
                            onOpenChange={setIsLanguageOpen}
                        >
                            <Button variant={"blurred"} text={"En"} className="dropdown-button" icon={<DownIcon/>}/>
                        </Dropdown>
                    </nav>
                    <NavLink to="#"><Button text="Sign Up" variant="primary"/></NavLink>
                </Drawer>
            </header>
        </>
    );
};
