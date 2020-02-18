import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/pureFunction.css';

const PureFunction = props => {

    const {data} = props;

    return (
        <div className="pureFunction">
            {data}
        </div>
    );
}

PureFunction.propTypes = {
    data: PropTypes.object
}
export default PureFunction;