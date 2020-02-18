import React, { Component }  from 'react';
import PropTypes from 'prop-types';
import StyledTableHeader from './StyledTableHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import StyledTableBodyRow from './StyledTableBodyRow';
// import './table4.css';
import styled from 'styled-components';
import StyledCell from './StyledCell';

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

const Icon = styled.span.attrs({
    className: "Icon"
})`
    cursor: pointer;
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
            console.log("columnElement", columnElement);
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
        console.log("this.state.leftPositions", this.state.leftPositions)
        const { tableData } = this.props;
        console.log("tableData", tableData)

        const rowCount = 20;
        const columnCount = tableData[0].length;
        const icon = (
            <Icon className="icon">
                <FontAwesomeIcon icon={faPencilAlt} fixedWidth />
            </Icon>
        );

        let rows = [];
        for (let x = 0; x < rowCount; x++) {
            const columns = [];
            for (let y = 0; y < columnCount; y++) {
                columns.push(
                <StyledCell key={`${x}${y}`} cellType="td" rowNum={x} colNum={y}
                    fixedToLeft={y<=this.props.fixColumnCount} leftPosition={this.state.leftPositions[y]}>
                    {y === 0 ? icon : x + " " + y}
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