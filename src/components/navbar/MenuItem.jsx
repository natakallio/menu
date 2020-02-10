import React from 'react';
import PropTypes from 'prop-types';
import MenuTitle from './MenuTitle';
import MenuIconFontAwesome from './MenuIconFontAwesome';

const MenuItem = props => {

    const {menuItem} = props;

    return (
        <div className="menuItem">
            <MenuIconFontAwesome iconName={menuItem.iconName} />
            <MenuTitle menuTitle={menuItem.title} />
        </div>
    );
}

MenuItem.propTypes = {
    menuItem: PropTypes.object
}
export default MenuItem;