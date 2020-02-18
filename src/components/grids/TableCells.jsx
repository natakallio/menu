import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/variables.css';
import '../../styles/grids/rowGrid.css';
import styled from 'styled-components';

const TableContent = styled.div.attrs({
    className: "TableContent"
})`
    display: inline-grid;
    grid-template-columns: repeat(${props => props.columnCount}, 200px [col-start]);
    background-color: orange;
`;


const TableCell = styled.div.attrs({
    className: "TableCell",
})`
    width: 200px;
    background-color: var(--color-navbar-background);
    height: 50px;
    border: solid 5px white;
`;

const TableCells = props => {

    const { data } = props;

    const columnCount = 5;
    const rowCount = 7;

    const gridColumnCount = columnCount * rowCount;
    let columns = [];
    for (let index = 0; index < gridColumnCount; index++) {
        columns.push(<TableCell key={index}>{index}</TableCell>);
    }

    return (<TableContent columnCount={columnCount}>
            {columns}
        </TableContent>
    );
}

TableCells.propTypes = {
    data: PropTypes.object
}
export default TableCells;