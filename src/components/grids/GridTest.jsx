import React from 'react';
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
    width: 200px;
    background-color: red;
    // height: 50px;
    border: solid 5px white;
    flex-shrink: 0;
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
    width: 200px;
    background-color: blue;
    // height: 50px;
    border: solid 5px white;
    flex-shrink: 0;
    position: fixed;
    z-index: 1;
`;

const table = [];

const columnCount = 5;
const rowCount = 15;

for (let x = 1; x <= rowCount; x++) {

    const columns = [];
    for (let y = 1; y <= columnCount; y++) {
        if ( x === 1 && y === 1) {
            columns.push(<GridItem key ={`${x} ${y}`}>NO</GridItem>);
        }
        else if (y === 1) {
            columns.push(<FirstColumn key ={`${x} ${y}`}>{x ===5? "Some long adkfjaldfj Some long aSome long aSome long aSome long aSome long aadlskf sdljga ljfda alkja dslkfj": `${x} ${y}`}</FirstColumn>);
        }
        else if (x === 1) {
            columns.push(<HeaderItem key ={`${x} ${y}`}>{y ===3? "Some long adkfjaldfj Some long aSome long aSome long aSome long aSome long aadlskf sdljga ljfda alkja dslkfj": `${x} ${y}`}</HeaderItem>);
        }
        else {
            if (x ===3 && y ===2) {
                columns.push(<GridItem key ={`${x} ${y}`}>
                    <input type="number" id="fname" name="fname"></input>
                </GridItem>);

            } else {
                columns.push(<GridItem key ={`${x} ${y}`}>{x} {y}</GridItem>);
            }

        }

    }
    table.push( x === 1 ? <FirstRow>{columns}</FirstRow> : <CenterContent>{columns}</CenterContent>);
}

const GridTest = props => {

    return (
        <div className="gridContentWrapper">
            <Extra key ={"1 1"}>1 1</Extra>
            {table}
        </div>
    );
}

export default GridTest;