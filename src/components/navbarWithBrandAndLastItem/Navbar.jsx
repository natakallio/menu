import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/navbarWithBrand.css';
import MenuItem from '../navbar/MenuItem';
import { menuItems } from '../../configuration/paramsNavbar';

const NavbarWithBrand = props => {

    const { data } = props;

    const navbarItemList = menuItems.map(menuItem => (
        <MenuItem key={menuItem.title} className="navbarItem" menuItem={menuItem} router={props.router} />
    ));

    const lastNavbarItem = <MenuItem className="navbarItem" menuItem={{ title: "C" }} router={props.router} />;

    return (
        <div className="navbarWithBrand">
            <div className="brandItem">A</div>
            <div className="navbarItemList">
                {navbarItemList}
            </div>
            <div className="lastNavbarItem">
                {lastNavbarItem}
            </div>
        </div>
    );
}

NavbarWithBrand.propTypes = {
    data: PropTypes.object
}
export default NavbarWithBrand;