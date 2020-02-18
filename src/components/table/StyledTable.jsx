import React, { Component }  from 'react';
import PropTypes from 'prop-types';
import StyledTableHeader from './StyledTableHeader';
import StyledTableBodyRow from './StyledTableBodyRow';
import styled from 'styled-components';
import StyledCell from './StyledCell';
import './table5.css';

const TableContainer = styled.div.attrs({
    className: "TableContainer"
})`
    overflow: auto;
    height: 300px;
    width: 900px;
    margin: 0 auto;
`;

const Table = styled.table.attrs({
    className: "Table"
})`
    border-collapse: separate;
    border-spacing: unset;
    -webkit-border-horizontal-spacing: unset;
    -webkit-border-vertical-spacing: unset;
    width: 100%;
`;

class StyledTable extends Component {

    constructor(props) {
        super(props);
        this.state = {
            leftPositions: [],
            fixColumnCount: -1
        };
    }

    componentDidMount() {
        let leftPositions = [];
        let nullPosition = 0;
        for (let columnNum = 0; columnNum <= (this.props.fixColumnCount || 0); columnNum++) {
            const columnElement = document.getElementsByClassName("col_" + columnNum)[0];

            if (columnNum === 0) {
                nullPosition = columnElement.getBoundingClientRect().x;
            }
            leftPositions.push(columnElement
                ? Math.round( (columnElement.getBoundingClientRect().x - nullPosition) * 10 ) / 10
                : "unset")
            this.setState({
                leftPositions,
                fixColumnCount: this.props.fixColumnCount
            });
        }
    }

    render() {
        const { tableData } = this.props;

        const rowCount = tableData.length;
        const columnCount = tableData[0].length;


        let rows = [];
        for (let x = 1; x < rowCount; x++) {
            const columns = [];
            for (let y = 0; y < columnCount; y++) {
                columns.push(
                <StyledCell key={`${x}${y}`} cellType="td" rowNum={x} colNum={y}
                    fixedToLeft={y<=this.props.fixColumnCount} leftPosition={this.state.leftPositions[y]}>
                    {tableData[x][y]}
                </StyledCell>);
            }
            rows.push(<StyledTableBodyRow key={`row${x}`} rowNum={x}>{columns}</StyledTableBodyRow>)
        }

        return (
            <TableContainer>
                <Table>
                    <StyledTableHeader
                        headers={tableData[0]}
                        fixColumnCount={this.props.fixColumnCount}
                        leftPositions={this.state.leftPositions}
                    />
                    <tbody>
                        {rows}
                    </tbody>
                </Table>
            </TableContainer>
        );
    }
}

StyledTable.propTypes = {
    tableData: PropTypes.array.isRequired
}
export default StyledTable;