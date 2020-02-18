import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/variables.css';
import '../../styles/grids/rowGrid.css';
import styled from 'styled-components';

const Wrapper = styled.div.attrs(props => {
    console.log("props", props)
    return {
    className: "RowGrid",

}})`
    display: grid;
    grid-template-columns: repeat(${props => props.columnCount}, 200px [col-start]);
    grid-gap: 0.1rem;
    background-color: ${props => props.name === "firstRowColumns" ? "chartreuse" : "orange"};
`;

const HeaderRow = styled.div.attrs({
    className: "HeaderRow"
})`
    display: grid;
    grid-template-columns: repeat(${props => props.columnCount}, 200px [col-start]);
    grid-gap: 0.1rem;
    background-color: chartreuse;
    position: -webkit-sticky;
    position: sticky;
    top: ${props => props.name === "header" ? "0" : "50px"};
`;

const NameColumn = styled.div.attrs({
    className: "NameColumn"
})`
    display: grid;
    grid-template-rows: repeat(${props => props.rowCount}, 50px);
    background-color: orange;
    position: -webkit-sticky;
    position: sticky;
    left: ${props => props.name === "names" ? "0" : "200px"};
`;

const GridItem = styled.div.attrs({
    className: "GridItem",
})`
    width: 200px;
    background-color: var(--color-navbar-background);
    height: 50px
`;

const NameCell = styled.div.attrs({
    className: "NameCell",
})`
    width: 200px;
    height: 50px
`;

const HeaderBoarderCell = styled.div.attrs({
    className: "HeaderBoarderCell",
})`
    width: 200px;
    background-color: white;
    height: 10px;
`;

const RowGrid = props => {

    const { data } = props;

    const columnCount = 1 + 5;
    let firstRowColumns = [];
    for (let index = 0; index < columnCount; index++) {
        firstRowColumns.push(<GridItem key={index}>title {index}</GridItem>);
    }
    let headerBoarder = [];
    for (let index = 0; index < columnCount; index++) {
    headerBoarder.push(<HeaderBoarderCell key={index}>&nbsp;</HeaderBoarderCell>);
    }

    const rowCount = 7;
    let names = [];
    for (let index = 0; index < rowCount; index++) {
        names.push(<NameCell key={index}>name {index}</NameCell>);
    }

    const gridColumnCount = columnCount * rowCount;
    let columns = [];
    for (let index = 0; index < gridColumnCount; index++) {
        columns.push(<GridItem key={index}>{index}</GridItem>);
    }

    return [
        <HeaderRow key="firstRowColumns" name="header" columnCount={columnCount}>
            {firstRowColumns}
        </HeaderRow>,
        <HeaderRow key="headerBoarder" name="border" columnCount={columnCount}>
            {headerBoarder}
        </HeaderRow>,
        <NameColumn key="names" name="names" rowCount={rowCount}>
            {names}
        </NameColumn>,
        <Wrapper key="grid" name="grid" columnCount={columnCount}>
            {columns}
        </Wrapper>
    ];
}

RowGrid.propTypes = {
    data: PropTypes.object
}
export default RowGrid;