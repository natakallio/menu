import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/navbar.css';
import MenuItem from './MenuItem';
import { faEnvelope, faPaperclip, faCloudUploadAlt, faCaretDown, faTimesCircle, faTimes} from '@fortawesome/free-solid-svg-icons';

const menuItems = [
    {
        iconName: faEnvelope,
        title: "Design"
    },
    {
        iconName: faPaperclip,
        title: "Work"
    },
    {
        iconName: faCloudUploadAlt,
        title: "Cloud"
    },
    {
        iconName: faCaretDown,
        title: "Down"
    },
    {
        iconName: faTimesCircle,
        title: "Close"
    },
    {
        iconName: faTimes,
        title: "Another Close"
    },
]
const Navbar = props => {

    return (
        <div className="navbar">
            <nav>
                {menuItems.map(menuItem => <MenuItem key={menuItem.title} menuItem={menuItem}/>)}
            </nav>
        </div>
    );
}

Navbar.propTypes = {
    data: PropTypes.object
}
export default Navbar;