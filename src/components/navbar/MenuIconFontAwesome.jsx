import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MenuIconFontAwesome = props => {

    const {iconName} = props;
    return (
        <span className="menuIcon">
            <FontAwesomeIcon icon={iconName} fixedWidth />
        </span>
    );
}

MenuIconFontAwesome.propTypes = {
    iconName: PropTypes.object
}
export default MenuIconFontAwesome;