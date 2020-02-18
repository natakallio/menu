import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/variables.css';
import '../../styles/grids/rowGrid.css';
import styled from 'styled-components';

const TableHeaderContent = styled.div.attrs({
    className: "TableHeaderContent"
})`
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    // margin-left: calc(200px + 0px);
`;

const HeaderRow = styled.div.attrs({
    className: "HeaderRow"
})`
    display: grid;
    grid-template-columns: repeat(${props => props.columnCount}, 200px [col-start]);
    background-color: chartreuse;
`;

const HeaderBoarderCell = styled.div.attrs({
    className: "HeaderBoarderCell",
})`
    width: 200px;
    background-color: white;
    height: 10px;
`;

const GridItem = styled.div.attrs({
    className: "GridItem",
})`
    width: 200px;
    background-color: red;
    height: 50px;
    border: solid 5px white;
`;

const TableHeader = props => {

    const { data } = props;

    const columnCount = 6 -1;

    let firstRowColumns = [];
    for (let index = 0; index < columnCount; index++) {
        firstRowColumns.push(<GridItem key={index}>title {index}</GridItem>);
    }

    let headerBoarder = [];
    for (let index = 0; index < columnCount; index++) {
        headerBoarder.push(<HeaderBoarderCell key={index}>&nbsp;</HeaderBoarderCell>);
    }

    return (
        <TableHeaderContent>
            <HeaderRow key="firstRowColumns" name="header" columnCount={columnCount}>
                {firstRowColumns}
            </HeaderRow>
            {/* <HeaderRow key="headerBoarder" name="border" columnCount={columnCount}>
                {headerBoarder}
            </HeaderRow> */}
        </TableHeaderContent>
    );
}

TableHeader.propTypes = {
    data: PropTypes.object
}
export default TableHeader;