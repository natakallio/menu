import React from 'react';
import PropTypes from 'prop-types';

const MenuTitle = props => {

    const {menuTitle} = props;

    return (
        <span className="menuTitle">
            {menuTitle}
        </span>
    );
}

MenuTitle.propTypes = {
    menuTitle: PropTypes.string
}
export default MenuTitle;