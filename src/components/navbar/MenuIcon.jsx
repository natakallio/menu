import React from 'react';
import PropTypes from 'prop-types';

const MenuIcon = props => {

    const {iconName} = props;

    return (
        <div className="menuIcon">
            {iconName}
        </div>
    );
}

MenuIcon.propTypes = {
    iconName: PropTypes.string
}
export default MenuIcon;