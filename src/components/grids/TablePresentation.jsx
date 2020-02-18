import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import CellContainer from './CellContainer';
import '../../styles/variables.css';

const MyTableContent = styled.div.attrs({
    className: "MyTableContent"
})`
    width: 900px;
    height: 350px;
    // background-color: aquamarine;
    margin: 0 auto;
    overflow: auto;
    position: relative;

`;

const Table = styled.div.attrs({
    className: "Table"
})`
    width: 100%;
    // background-color: blueviolet;
    position: relative;
    // > :nth-child(even) {background: #CCC}
    // > :nth-child(odd) {background: #FFF}
`;

const Row = styled.div.attrs({
    className: "Row"
})`
    white-space: nowrap;
    position: ${props => props.rowNum === 1 ? "sticky" : "unset"};
    top: ${props => props.rowNum === 1 ? "0" : "unset"};
    z-index: ${props => props.rowNum === 1 ? "3" : "1"};
    display: flex;
    align-items: stretch;
    &:focus {
        background-color: aquamarine;
    }
`;

const cellBackgroundColor = (props, isBorder = false) => {
    if (props.rowNum === 1 && props.columnNum === 1) {
        return "white";
    }
    if (props.rowNum === 1) {
        return isBorder ? "var(--color-border-cell-header)" : "var(--color-background-cell-header)"
    }
    // if (props.columnNum === 1 ) return "red";
    if (props.rowNum % 2 !== 0) return isBorder ? "var(--color-border-cell-odd)" : "var(--color-background-cell-odd)"
    return isBorder ? "var(--color-border-cell-even)" : "var(--color-background-cell-even)";

}

const getCellLeftBorder = props => {
    if (props.columnNum === 2) return "0";
    return `solid 5px ${cellBackgroundColor(props, true)}`;
}

const Cell = styled.div.attrs(props => {
    return {
    className: props.columnNum === 1 ? "FirstColumn" : "Cell",
}})`
    display: block;
    flex-shrink: 0;
    width: 200px;
    min-height: 50px;
    border-top: solid 5px ${props => cellBackgroundColor(props, true)};
    border-bottom: solid 5px ${props => cellBackgroundColor(props, true)};
    border-left: ${props => getCellLeftBorder(props)};
    border-right: ${props => props.columnNum === 1 && props.rowNum === 1 ? "0" : props.columnNum === 1 ? "5px solid var(--color-border-cell-odd)" : "0"};
    background-color: ${props => cellBackgroundColor(props)};
    position: ${props => props.columnNum === 1 ? "relative" : "unset"};
    left: ${props => props.columnNum === 1 ? "0" : "unset"};
    z-index: ${props => props.columnNum === 1 ? "2" : "1"};
`;

class TablePresentation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            headerHeight: "0",
            fixPos: 0,
        };
    }

    componentDidMount() {
        const tableRect = document.querySelector('.Table').getBoundingClientRect();
        const fixPos = tableRect.x;

        this.setState({
            fixPos
        });
    }

    onScroll = () => {
        const tableX = document.querySelector('.Table').getBoundingClientRect().x;
        const newFixPos = (this.state.fixPos - tableX) +'px';

        const firstColumns = document.querySelectorAll('.FirstColumn');
        firstColumns.forEach(x => x.style.left = newFixPos);
    }

    render() {
        const columnCount = 30;
        const rowCount = 20;

        let rows = [];
        for (let x = 1; x <= rowCount; x++) {

            let columns = [];
            for (let y = 1; y <= columnCount; y++) {
                columns.push(
                <Cell key={`${x}_${y}`} rowNum={x} columnNum={y}>
                    <CellContainer x={x} y={y} />
                </Cell>);
            }
            rows.push(<Row key={`row${x}`} rowNum={x} >{columns}</Row>);
        }

        return (
            <MyTableContent onScroll={this.onScroll}>
                <Table>
                    {rows}
                </Table>
            </MyTableContent>
        );
    }
}

TablePresentation.propTypes = {
    data: PropTypes.object
}
export default TablePresentation;