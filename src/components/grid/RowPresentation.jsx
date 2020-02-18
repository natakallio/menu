import React from 'react';
import PropTypes from 'prop-types';
import CellContainer from '../grids/CellContainer';
import styled from 'styled-components';

const Row = styled.div.attrs({
    className: "Row"
})`
    white-space: nowrap;
    position: ${props => props.rowNum === 0 ? "sticky" : "unset"};
    top: ${props => props.rowNum === 0 ? "0" : "unset"};
    z-index: ${props => props.rowNum === 0 ? "3" : "1"};
    display: flex;
    align-items: stretch;
    &:focus {
        background-color: aquamarine;
    }
`;

const cellBackgroundColor = (props, isBorder = false) => {
    if (props.rowNum === 0 && props.columnNum === 0) {
        return "white";
    }
    if (props.rowNum === 0) {
        return isBorder ? "var(--color-border-cell-header)" : "var(--color-background-cell-header)"
    }
    // if (props.columnNum === 0 ) return "red";
    if (props.rowNum % 2 !== 0) return isBorder ? "var(--color-border-cell-odd)" : "var(--color-background-cell-odd)"
    return isBorder ? "var(--color-border-cell-even)" : "var(--color-background-cell-even)";

}

const getCellLeftBorder = props => {
    if (props.columnNum === 2) return "0";
    return `solid 5px ${cellBackgroundColor(props, true)}`;
}

const Cell = styled.div.attrs(props => {
    return {
    className: props.columnNum === 0 ? "FirstColumn" : "Cell",
}})`
    display: block;
    flex-shrink: 0;
    width: 200px;
    min-height: 50px;
    border-top: solid 5px ${props => cellBackgroundColor(props, true)};
    border-bottom: solid 5px ${props => cellBackgroundColor(props, true)};
    border-left: ${props => getCellLeftBorder(props)};
    border-right: ${props => props.columnNum === 0 && props.rowNum === 0 ? "0" : props.columnNum === 0 ? "5px solid var(--color-border-cell-odd)" : "0"};
    background-color: ${props => cellBackgroundColor(props)};
    position: ${props => props.columnNum === 0 ? "relative" : "unset"};
    left: ${props => props.columnNum === 0 ? "0" : "unset"};
    z-index: ${props => props.columnNum === 0 ? "2" : "1"};
`;

const RowPresentation = props => {

    const {rowNum, data} = props;
    console.log("data", data)
    const columns = data.map((column, index) => (
        <Cell key={`${rowNum}_${index}`} rowNum={rowNum} columnNum={index}>
            { column.cellText ? column.cellText : <CellContainer x={rowNum} y={index} data={column} />}
        </Cell>
    ));

    return <Row key={`row${rowNum}`} rowNum={rowNum} >{columns}</Row>;
}

RowPresentation.propTypes = {
    rowNum: PropTypes.number.isRequired,
    data: PropTypes.object.isRequired
}
export default RowPresentation;