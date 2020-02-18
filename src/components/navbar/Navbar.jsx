import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/navbar.css';
import MenuItem from './MenuItem';
import { menuItems } from '../../configuration/paramsNavbar';

const Navbar = props => {

    return (
        <div className="navbar">
            <nav>
                {menuItems.map(menuItem => <MenuItem key={menuItem.title} menuItem={menuItem} router={props.router} />)}
            </nav>
        </div>
    );
}

Navbar.propTypes = {
    data: PropTypes.object
}
export default Navbar;