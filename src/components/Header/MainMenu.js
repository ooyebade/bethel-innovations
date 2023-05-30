import { useState } from "react";
import { NavLink } from "react-router-dom";

const menus = [
    {
        id: 1,
        linkTxt: 'Home',
        link: '/'
    }, 

    {
        id: 2,
        linkTxt: 'About Us',
        link: '/about-us',
    }, 

    {
        id: 3,
        linkTxt: 'Services',
        link: '/services'
    }, 

    {
        id: 4,
        linkTxt: 'Clients',
        link: '/clients'
    }, 

    /*
    {
        id: 4,
        linkTxt: 'Contact Us',
        link: '/contact-us'
    }
    */
]; 

const MainMenu = () => {

    const [showMobileSubMenu, setShowMobileSubMenu] = useState(0);

    const handleHideShowOnMobileMenu = (id) => {
        if (showMobileSubMenu === 0 ) {
            setShowMobileSubMenu(id);
        } else {
            setShowMobileSubMenu(0);
        }
    }

    return (

        <ul className="navbar-nav">

            {menus.length > 0 ? menus.map((item, i) => (
                <li key={i}
                    onClick={() => handleHideShowOnMobileMenu(item?.id)}
                    className={`${item.child ? 'dropdown' : ''} nav-item`} >
                        {item.child ? <NavLink onClick={e => e.preventDefault()} to="/"
                            className='menu-dropdown nav-link' data-toggle='dropdown'>{item.linkTxt}
                        </NavLink>
                        : <NavLink to={item.link} className='nav-link'
                            data-toggle='dropdown' aria-expanded='true'>{item.linkTxt}
                        </NavLink>}

                        {item.child ?
                            <ul className={`dropdown-menu ${showMobileSubMenu === item.id ? 'show' : ''}`} role='menu'>
                                {item.submenu.map((sub_item, i) => (
                                    <li key={i}>
                                        {sub_item.child ? 
                                            <NavLink onClick={e => e.preventDefault()}
                                                to='/'>{sub_item.linkTxt}</NavLink>
                                            : <NavLink to={sub_item.link} className='dropdown-item'>{sub_item.linkTxt}</NavLink>}
                                    </li>
                                ))}
                            </ul>
                            : null
                        }
                    </li>
            )) : null}
        </ul>
    );
};


export default MainMenu;