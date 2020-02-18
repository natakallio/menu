import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Th = styled.th.attrs({
    className: "Th"
})`
    position: sticky;
    top: 0;
    z-index: 1;
    ${({fixedToLeft, leftPosition}) => fixedToLeft && `
        background-color: skyblue;
        left: ${leftPosition +"px"};
        z-index: 3;
    `}
`;

const StyledHeaderCell = props => {

    const { rowNum, colNum, fixedToLeft, leftPosition, children } = props;
    return (
        <Th key={`${rowNum}${colNum}`} className={`col_${colNum}`} fixedToLeft={fixedToLeft} leftPosition={leftPosition}>
            {children}
        </Th>
    );
}

StyledHeaderCell.propTypes = {
    rowNum: PropTypes.number.isRequired,
    colNum: PropTypes.number.isRequired
}
export default StyledHeaderCell;