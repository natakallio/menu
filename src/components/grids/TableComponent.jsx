import React, { Component } from 'react';
import '../../styles/grids/rowGrid.css';
import styled from 'styled-components';

const CenterContent = styled.div.attrs({
    className: "CenterContent"
})`
    display: flex;
`;

const FirstRow = styled.div.attrs({
    className: "FirstRow"
})`
    display: flex;
    position: sticky;
    top: 0;
`;

const GridItem = styled.div.attrs({
    className: "GridItem",
})`
    width: 200px;
    background-color: orange;
    // height: 50px;
    border: solid 5px white;
    flex-shrink: 0;
`;

const FirstColumn = styled.div.attrs({
    className: "FirstColumn",
})`
    width: 250px;
    background-color: red;
    // height: 50px;
    border: solid 5px white;
    flex-shrink: 0;
    position: sticky;
    left: 0;
`;

const FirstColumnExtra = styled.div.attrs({
    className: "FirstColumnExtra",
})`
    width: 100%;
    position: sticky;
    left: 0;
`;
const HeaderItem = styled.div.attrs({
    className: "HeaderItem",
})`
    width: 200px;
    background-color: green;
    // height: 50px;
    border: solid 5px white;
    flex-shrink: 0;
    position: sticky;
    top: 0;
`;

const Extra = styled.div.attrs({
    className: "Extra",
})`
    width: 250px;
    background-color: blue;
    height: ${props => props.headerHeight};
    border: solid 5px white;
    flex-shrink: 0;
    position: fixed;
    z-index: 1;
`;

const Foo = styled.div.attrs({
    className: "Foo",
})`
    width: 250px;
    border: solid 5px white;
    flex-shrink: 0;
`;

const FlexCol = styled.div.attrs({
    className: "FlexCol",
})`
display: flex;
    flex-shrink: 0;
`;

class TableComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            headerHeight: "0",
        };
    }

    componentDidMount() {
        const element = document.getElementById('foo');
        const positionInfo = element.getBoundingClientRect();
        const headerHeight = positionInfo.height + "px";
        console.log("headerHeight", headerHeight)
        this.setState({
            headerHeight
        });
    }

    render() {

        const table = [];

        const columnCount = 25;
        const rowCount = 15;

        for (let x = 1; x <= rowCount; x++) {

            const columns = [];
            const firstCol = <FirstColumn key={`${x} ${1}`}>

            {x === 5 ? "Some long adkfjaldfj Some long aSome long aSome long aSome long aSome long aadlskf sdljga ljfda alkja dslkfj" : `${x} ${1}`}

        </FirstColumn>
            for (let y = 2; y <= columnCount; y++) {
                if (x === 1 && y === 2) {
                    columns.push(<HeaderItem id="foo" key={`${x} ${y}`}>{`${x} ${y}`}</HeaderItem>);
                }
                else if (x === 1) {
                    columns.push(<HeaderItem key={`${x} ${y}`}>{y === 3 ? "Some long adkfjaldfj Some long aSome long aSome long aSome long aSome long aadlskf sdljga ljfda alkja dslkfj" : `${x} ${y}`}</HeaderItem>);
                }
                else {
                    if (x === 3 && y === 2) {
                        columns.push(

                        <GridItem key={`${x} ${y}`}>
                            <input type="number" id="fname" name="fname"></input>
                        </GridItem>);

                    } else {
                        columns.push(<GridItem key={`${x} ${y}`}>{x} {y}</GridItem>);
                    }

                }

            }
            table.push(x === 1 ? <FirstRow>{columns}</FirstRow> : <FlexCol>{firstCol}<CenterContent>{columns}</CenterContent></FlexCol>);
        }

        return (
            <div className="gridContentWrapper">
                <Extra headerHeight={this.state.headerHeight} key={"1 1"}>1 1</Extra>
                {table}
            </div>
        );
    }
}

export default TableComponent;