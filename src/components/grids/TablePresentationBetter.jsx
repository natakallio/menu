import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import CellContainer from './CellContainer';

const TableContent = styled.div.attrs({
    className: "TableContent"
})`
    width: 900px;
    height: 350px;
    display: grid; /* This is a (hacky) way to make the .grid element size to fit its content */
    overflow: auto;
`;

const Table = styled.div.attrs({
    className: "Table"
})`
    display: flex;
    flex-wrap: nowrap;
`;

const Column = styled.div.attrs({ // gridCol
    className: "Cell"
})`
    width: 150px;
    min-width: 150px;
`;

const HeaderCell = styled.div.attrs({ //grid-item--header
    className: "HeaderCell"
})`
    height: 100px;
    min-height: 100px;
    position: sticky;
    position: -webkit-sticky;
    background: white;
    top: 0;
`;

const ColFixedLeft = styled.div.attrs({ //grid-col--fixed-left
    className: "ColFixedLeft"
})`
    position: sticky;
    left: 0;
    z-index: 9998;
    background: white;
`;

const ColFixedRight = styled.div.attrs({ //grid-col--fixed-right
    className: "ColFixedLeft"
})`
    position: sticky;
    right: 0;
    z-index: 9998;
    background: white;
`;

const Cell = styled.div.attrs({ //grid-item
    className: "Cell"
})`
    height: 50px;
    border: 1px solid gray;
`;

class TablePresentationBetter extends Component {

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
        const columnCount = 7;
        const rowCount = 5;

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
            <TableContent onScroll={this.onScroll}>
                <Table>
                    {rows}
                </Table>
            </TableContent>
        );
    }
}

TablePresentationBetter.propTypes = {
    data: PropTypes.object
}
export default TablePresentationBetter;