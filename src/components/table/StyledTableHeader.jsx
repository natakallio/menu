import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import StyledHeaderCell from './StyledHeaderCell';
import StyledCell from './StyledCell';

const Thead = styled.thead.attrs({
    className: "Thead"
})`
`;

const Tr = styled.tr.attrs(props => (
{
    className: `Tr ${props.className}`
}))`
`;

const StyledTableHeader = props => {

    const { headers, fixColumnCount, leftPositions } = props;

    return (
        <Thead>
        <Tr>
            {headers.map((x, index) => (
                <StyledCell key={`${x}${index}`} rowNum={0} colNum={index}
                    fixedToLeft={index<=fixColumnCount} leftPosition={leftPositions[index]}>
                    {x}
                </StyledCell>
            ))}
        </Tr>
      </Thead>
    );
}

StyledTableHeader.propTypes = {
    headers: PropTypes.array.isRequired
}
export default StyledTableHeader;