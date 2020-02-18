import React from 'react';
import PropTypes from 'prop-types';
// import './table2.css';

const TableHeader = props => {

    const { headers } = props;

    return (
        <thead>
        <tr>
            {headers.map((x, index) => <th key={`${x}${index}`} className={`col_${index}`}>{x}</th>)}
        </tr>
      </thead>
    );
}

TableHeader.propTypes = {
    headers: PropTypes.array.isRequired
}
export default TableHeader;