import { Component } from "react";
import makeGridHeader from "../../generalFunctions/makeGridHeader";
import { salaryTipes } from "../../data/salaryTypes";

export default class WithTableData extends Component {
    state = {
        tableData: [makeGridHeader(salaryTipes).map(x => x.cellText)],
        fixColumnCount: 2
    }

    render() {
        return this.props.render(this.state.tableData, this.state.fixColumnCount);
    }
}