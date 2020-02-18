import React from 'react';
import PropTypes from 'prop-types';

const GridFlexColumn = props => {

    const {children} = props;
    if (props.columnNum === 0) {
        return (
            <div className="gridFlexColumn firstColumn">
                {children}
            </div>
        );
    }

    return (
        <div className="gridFlexColumn">
            {children}
        </div>
    );
}

GridFlexColumn.propTypes = {
    // children: PropTypes.object
}
export default GridFlexColumn;