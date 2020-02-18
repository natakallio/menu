import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Tr = styled.tr.attrs({
    className: "Tr"
})`
    &:hover {
        background-color: var(--color-table-row-hover);
    }
`;

const StyledTableBodyRow = props => {

    const { rowNum } = props;

    const [isHover, setIsHover] = useState(false);

    const toggleHover = () => {
        setIsHover(!isHover);
    }

    const childrenWithPropsIsHover = React.Children.map(props.children, child =>
        React.cloneElement(child, { isHover })
      );

    return <Tr key={`row${rowNum}`} onMouseEnter={toggleHover} onMouseLeave={toggleHover} >{childrenWithPropsIsHover}</Tr>;
}

StyledTableBodyRow.propTypes = {
    rowNum: PropTypes.number.isRequired
}
export default StyledTableBodyRow;