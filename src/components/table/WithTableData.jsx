import { Component } from "react";
import makeGridHeader from "../../generalFunctions/makeGridHeader";
import { salaryTipes } from "../../data/salaryTypes";

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

        let rows = [];
        for (let x = 0; x < this.rowCount; x++) {
            const columns = [];
            for (let y = 0; y < columnCount; y++) {
                columns.push(y === 0 ? "icon" : x + " " + y);
            }
            rows.push(columns);
        }
        const tableData = [...tableDataWithHeader, ...rows];
        console.log("XXXtableData", tableData)
        return tableData;
    }



    render() {
        return this.props.doRender(this.state.tableData, this.state.fixColumnCount);
    }
}