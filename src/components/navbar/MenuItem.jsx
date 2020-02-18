import React from 'react';
import PropTypes from 'prop-types';
import MenuTitle from './MenuTitle';
import MenuIconFontAwesome from './MenuIconFontAwesome';

const MenuItem = props => {

    const {menuItem, router, className} = props;

    return (
        <div className={ className ? className : "menuItem"} onClick={() => router.navigate("/cloud")}>
            {menuItem.iconName && <MenuIconFontAwesome iconName={menuItem.iconName} />}
            <MenuTitle menuTitle={menuItem.title} />
        </div>
    );
}

MenuItem.propTypes = {
    menuItem: PropTypes.object
}
export default MenuItem;