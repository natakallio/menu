import React, { Component } from "react";
import makeGridHeader from "../../generalFunctions/makeGridHeader";
import { salaryTipes } from "../../data/salaryTypes";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const Icon = styled.span.attrs({
    className: "Icon"
})`
    cursor: pointer;
`;

export default class WithTableData extends Component {


    rowCount = 20;

    constructor(props) {
        super(props);

        this.doTable();

        this.state = {
            tableData: this.doTable(),
            fixColumnCount: 2
        }

      }

    doTable() {
        const tableDataWithHeader = [makeGridHeader(salaryTipes).map(x => x.cellText)];
        const columnCount = tableDataWithHeader[0].length;
        const icon = (
            <Icon className="icon">
                <FontAwesomeIcon icon={faPencilAlt} fixedWidth />
            </Icon>
        );

        let rows = [];
        for (let x = 1; x <= this.rowCount; x++) {
            const columns = [];
            for (let y = 0; y < columnCount; y++) {
                columns.push(y === 0 ? icon : x + " " + y);
            }
            rows.push(columns);
        }
        const tableData = [...tableDataWithHeader, ...rows];

        return tableData;
    }



    render() {
        return this.props.render(this.state.tableData, this.state.fixColumnCount);
    }
}