import React from 'react';
import PropTypes from 'prop-types';

const GridFlexCell = props => {

    const {children} = props;

    return (
        <div className="gridFlexCell">
            {children}
        </div>
    );
}

GridFlexCell.propTypes = {
    // children: PropTypes.object
}
export default GridFlexCell;