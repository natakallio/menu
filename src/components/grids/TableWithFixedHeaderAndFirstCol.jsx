import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/variables.css';
import '../../styles/grids/rowGrid.css';
import styled from 'styled-components';

const Wrapper = styled.div.attrs(props => {
    console.log("props", props)
    return {
        className: "TableWithFixedHeaderAndFirstCol",

    }
})`
    display: grid;
    grid-template-columns: repeat(${props => props.columnCount}, 200px [col-start]);
    grid-gap: 0.1rem;
    background-color: ${props => props.name === "firstRowColumns" ? "chartreuse" : "orange"};
    position: ${props => props.name === "firstRowColumns" ? "absolute" : "unset"};
`;

const GridItem = styled.div.attrs({
    className: "GridItem",
})`
    width: 200px;
    background-color: var(--color-navbar-background);
    height: 100px
`;

const TableWithFixedHeaderAndFirstCol = props => {

    const { data } = props;

    const columnCount = 1 + 5;
    let firstRowColumns = [];
    for (let index = 0; index < columnCount; index++) {
        firstRowColumns.push(<GridItem key={index}>title {index}</GridItem>);
    }

    const gridColumnCount = columnCount * 5;
    let columns = [];
    for (let index = 0; index < gridColumnCount; index++) {
        columns.push(<GridItem key={index}>{index}</GridItem>);
    }

    const cellCount = 20;
    let headRow = [<th key="emptyCell"></th>];
    for (let index = 0; index < cellCount; index++) {
    headRow.push(<th key={`headRow ${index}`}>head {index}</th>);
    }

    let bodyRow = [<th key="head">head</th>];
    for (let index = 0; index < cellCount; index++) {
        bodyRow.push(<td key={`bodyRow ${index}`}>body {index}</td>);
    }

    let bodyTable = [];
    for (let index = 0; index < 15; index++) {
        bodyTable.push(<tr key={`bodyTable ${index}`}>{bodyRow}</tr>);
    }

    return (
        <div  className="gridContentWrapper">
            <table>
                <thead>
                <tr>
                    {headRow}
                </tr>
                </thead>
                <tbody>
                    {bodyTable}
                </tbody>
            </table>
        </div>
    );
}

TableWithFixedHeaderAndFirstCol.propTypes = {
    data: PropTypes.object
}
export default TableWithFixedHeaderAndFirstCol;
