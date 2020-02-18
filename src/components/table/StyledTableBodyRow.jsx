import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Tr = styled.tr.attrs({
    className: "Tr"
})`
`;

const StyledTableBodyRow = props => {

    const { rowNum, children } = props;

    return <Tr key={`row${rowNum}`}>{children}</Tr>;
}

StyledTableBodyRow.propTypes = {
    rowNum: PropTypes.number.isRequired
}
export default StyledTableBodyRow;