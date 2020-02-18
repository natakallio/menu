import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Th = styled.th.attrs(props => (
    {
        className: `Th col_${props.colNum}`,
        key: `${props.rowNum}${props.colNum}`
    }))`
    position: sticky;
    top: 0;
    ${({fixedToLeft}) => !fixedToLeft && `
        color: var(--color-table-header-notfixed);
        background-color: var(--color-background-table-header-notfixed);
        z-index: 1;
    `}
    ${({fixedToLeft, leftPosition}) => fixedToLeft && `
        color: var(--color-table-header-fixed);
        background-color: var(--color-background-table-header-fixed);
        left: ${leftPosition === 0 ? "0" : leftPosition +"px"};
        z-index: 3;
    `}
`;

const Td = styled.td.attrs(props => (
{
    className: `Td col_${props.colNum}`,
    key: `${props.rowNum}${props.colNum}`
}))`
    ${({fixedToLeft, leftPosition}) => fixedToLeft && `
        position: sticky;
        left: ${leftPosition +"px"};
        z-index: 1;
        background-color: aquamarine;
    `}
`;

const StyledCell = props => {

    const { cellType, children } = props;

    if (cellType === "td") {
        return <Td {...props}>{children}</Td>;
    }

    return (
        <Th {...props}>{children}</Th>
    );
}

StyledCell.propTypes = {
    rowNum: PropTypes.number.isRequired,
    colNum: PropTypes.number.isRequired
}
export default StyledCell;